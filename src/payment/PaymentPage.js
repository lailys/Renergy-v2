// import React, { useState, useEffect } from "react";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./ CheckoutForm";

// import "./paymentPage.css";
// import axios from "axios";

// const stripePromise = loadStripe("pk_test_sP0nKcz4HjCtl7mi2z3X72Rv00Yj708PHK");

// function PaymentPage() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     const tokens = JSON.parse(localStorage.getItem("authTokens"));

//     var config = {
//       method: "post",
//       url: "http://127.0.0.1:3000/funds/create-payment-intent",
//       data: { amount_cents: 55 },
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + tokens.access,
//       },
//     };
//     axios(config)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => console.log(err.request));
//   }, []);

//   const appearance = {
//     theme: "stripe",
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="stripe-container">
//       {" "}
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}{" "}
//     </div>
//   );
// }

// export default PaymentPage;

import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";

import CheckoutForm from "./ CheckoutForm";

import "./paymentPage.css";

// FIXME: instead of hard-coding, make a GET to
// http://127.0.0.1:3000/funds/get-stripe-public-key
const stripePromise = loadStripe("pk_test_sP0nKcz4HjCtl7mi2z3X72Rv00Yj708PHK");

function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("authTokens"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokens.access,
    };

    var config = {
      method: "post",
      url: "http://127.0.0.1:3000/funds/create-payment-intent",
      data: JSON.stringify({
        amount_cents: 69,
      }),
      headers: headers,
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setClientSecret(response.data.clientSecret);
      })
      .catch((err) => console.log(err.request));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {<CheckoutForm />}
        </Elements>
      )}
    </div>
  );
}

export default PaymentPage;
