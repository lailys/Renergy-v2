import React, { useState } from "react";
import { TbdContextComp } from "./provider/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/HomePage";
import Navbar from "./components/navigation/Navbar";
import GeneralErrorContainer from "./components/generals/GeneralErrorContainer";
import SessionTimeout from "./sessionTimeout/sessionTimeout";
import Auth from "./components/authentication/AuthPage";
import Backdrop from "./components/backdrop/Backdrop";
import Marketplace from "./components/marketplace/MarketplacePage";
import Dashboard from "./components/dashboard/DashboardPage";
import PaymentPage from "./components/payment/PaymentPage";
import Form from "./components/dashboard/forms/Form";
import "./App.css";
import PaymentSucces from "./components/payment/PaymentSucces";

const App = () => {
  return (
    <TbdContextComp>
      {" "}
      <React.Suspense fallback={<p> Loading page... </p>}>
        {" "}
        <GeneralErrorContainer />
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />{" "}
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/signin" element={<Auth mode="/signin" />} />{" "}
          <Route exact path="/signup" element={<Auth mode="/signup" />} />{" "}
          <Route exact path="/register" element={<Auth mode="/register" />} />{" "}
          <Route exact path="/marketplace" element={<Marketplace />} />{" "}
          <Route path="/dashboard" element={<Dashboard tab="Generator" />} />{" "}
          <Route
            path="/dashboard/generator"
            element={<Dashboard tab="Generator" />}
          />{" "}
          <Route path="/dashboard/recs" element={<Dashboard tab="RECs" />} />{" "}
          <Route
            path="/dashboard/transaction"
            element={<Dashboard tab="Transactions" />}
          />{" "}
          <Route
            path="/dashboard/orders"
            element={<Dashboard tab="Orders" />}
          />{" "}
          <Route
            path="/stripe-payment"
            element={<PaymentPage tab="payment" />}
          />{" "}
          <Route path="/stripe-payout" element={<PaymentPage tab="payout" />} />{" "}
          <Route path="/payment-success/" element={<PaymentSucces />} />{" "}
        </Routes>{" "}
        <Backdrop />
        <Form />
        <SessionTimeout />
      </React.Suspense>{" "}
    </TbdContextComp>
  );
};

export default App;
