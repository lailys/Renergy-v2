import React, { useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { TbdContextComp } from "./provider/provider";
import { useDispatch, useSelector } from "react-redux";

import { history } from "./redux/helpers/history";
import { alertActions } from "./redux/actions/alert.actions";
import { PrivateRoute } from "./redux/components/PrivateRoute";

import "./App.css";

import LandingPage from "./landingPage/landingPage";
import NavBar from "./navBar/navBar";
import Register from "./register/register";
import Sign from "./sign/sign";
import MarketPlace from "./marketPlace/marketPlace";
import AdminBasePage from "./admin/adminBasePage/adminBasePage";
import ClientBasePage from "./client/clientBasePage/clientBasePage";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);
  return (
    <TbdContextComp>
      <div className="main-container">
        {" "}
        <NavBar />{" "}
        {alert.message && (
          <div className={`alert ${alert.type}` + " authentication-alert"}>
            {" "}
            {alert.message}{" "}
          </div>
        )}{" "}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />{" "}
          <Route exact path="/marketPlace" element={<MarketPlace />} />{" "}
          <Route exact path="/login" element={<Sign type="in" />} />{" "}
          <Route exact path="/signup" element={<Sign type="up" />} />{" "}
          <Route exact path="/user-profile" element={<Register />} />{" "}
          <Route exact path="/admin-profile" element={<Register />} />{" "}
          <Route
            exact
            path="/user-dashboard"
            element={<ClientBasePage type="/user-dashboard" />}
          />{" "}
          <Route
            exact
            path="/admin-dashboard"
            element={<AdminBasePage type="/admin-dashboard" />}
          />{" "}
          <Route
            exact
            path="/admin-user-list"
            element={<AdminBasePage type="/admin-user-list" />}
          />{" "}
          <Route
            exact
            path="/admin-generator-list"
            element={<AdminBasePage type="/admin-generator-list" />}
          />{" "}
          <Route
            exact
            path="/admin-token-list"
            element={<AdminBasePage type="/admin-token-list" />}
          />{" "}
        </Routes>{" "}
      </div>{" "}
    </TbdContextComp>
  );
}

export default App;
