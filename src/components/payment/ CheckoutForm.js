import { useEffect, useContext, useState } from "react";
import { TbdContext } from "../../provider/provider";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({
  setAmount,
  tab,
  clientSecret,
  getClientSecret,
}) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    // const clientSecret = new URLSearchParams(window.location.search).get(
    //   "payment_intent_client_secret"
    // );
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://3001/payment-success/",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    let errorMsg = result.error ? result.error.message : null;
    let paymentMsg = null;
    switch (result.paymentIntent && result.paymentIntent.status) {
      case "succeeded":
        paymentMsg = "Payment succeeded!";
        break;
      case "processing":
        paymentMsg = "Your payment is processing.";
        break;
      case "requires_payment_method":
        paymentMsg = "Your payment was not successful, please try again.";
        break;
      default:
        errorMsg = "Something went wrong.";
        break;
    }
    localStorage.setItem("paymentMessage", errorMsg || paymentMsg);
    if (!result.error) {
      navigate("/payment-success/");
    }

    setIsLoading(false);
  };
  console.log(window.location.pathname, "333333");

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="payment-amount">
        <input
          id="payment-amount-input"
          placeholder="$"
          type="number"
          step="0.01"
          min="1"
          onChange={(e) => setAmount(e.target.value)}
        />{" "}
      </div>{" "}
      {tab === "payment" && <PaymentElement id="payment-element" />}
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className={
          window.location.pathname === "/stripe-payment"
            ? "stripe-payment-add"
            : "stripe-payment-withdraw"
        }
      >
        <span id="button-text">
          {" "}
          {isLoading ? (
            <div className="spinner" id="spinner">
              {" "}
            </div>
          ) : window.location.pathname === "/stripe-payment" ? (
            "Pay now"
          ) : (
            "Withdraw now"
          )}{" "}
        </span>{" "}
      </button>{" "}
      {/* Show any error or success messages */}{" "}
      {message && <div id="payment-message"> {message} </div>}{" "}
    </form>
  );
}
