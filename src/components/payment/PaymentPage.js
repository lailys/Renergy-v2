import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";

import CheckoutForm from "./ CheckoutForm";

import "./paymentPage.css";

// FIXME: instead of hard-coding, make a GET to
// http://127.0.0.1:3000/funds/get-stripe-public-key
const stripePromise = loadStripe(
  "pk_test_51GiOhTKib7Q4SqxOH09JDOUe11XIQKlhWefICpHUJJkUbOKvObqDbHTyz7QfjfmAWliMaY4NGX1dYGM9GrzqnGmV00El9jzT73"
);

function PaymentPage({ tab }) {
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(1);
  // const [amount, setAmount] = useState(1);
  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("authTokens"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokens.access,
    };
    var config = {
      method: "post",
      url: "http://localhost:3000/funds/create-payment-intent",
      data: JSON.stringify({
        amount_cents: amount * 100,
      }),
      headers: headers,
    };
    axios(config)
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      })
      .catch((err) => console.log("error====>", err.request));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment-container">
      {" "}
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          {
            <CheckoutForm
              tab={tab}
              clientSecret={clientSecret}
              setAmount={setAmount}
            />
          }
        </Elements>
      )}
    </div>
  );
}

export default PaymentPage;
