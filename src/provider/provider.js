import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authentication } from "../redux/reducers/authentication.reducer";

import axios from "axios";

import jwt_decode from "jwt-decode";

import { userActions } from "../redux/actions/user.actions";

export const TbdContext = React.createContext();

export const TbdContextProvider = TbdContext.Provider;
export const TbdContextConsumer = TbdContext.Consumer;

export const TbdContextComp = ({ children, store }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const landing1Ref = useRef(null);

  const [dashboardData, setDashboardData] = useState([]);
  const [filterChanged, setFilterChanged] = useState(false);
  const [marketParam, setMarketParam] = useState({
    side: "",
    owner: "",
    qty: "",
    certifying_bodies_for_ui: "",
    vintage_dt_min: "",
  });
  // const [marketParam, setMarketParam] = useState("?owner=ME");
  const [market, setMarket] = useState([]);
  const [signupForm, setSignupForm] = useState({});
  const [signinForm, setSigninForm] = useState({});
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("user") ? localStorage.getItem("user") : null
  );
  const [activeGenerator, setAxctiveGenerator] = useState("generator");
  const [userType, setUserType] = useState("client");
  const [landingPageFirstClicked, setLandingPageFirstClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openedTab, setOpenedTab] = useState("");
  let [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [newRec, setNewRec] = useState({});
  const [dimensions, setDimensions] = useState({
    border: "solid red 1px",
    left: "0px",
    bottom: "0vh",
    // width: "1678px",
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    blobAW: "20px",
    blobAH: "20px",
    blobABottom: "10px",
    blobAPosition: "fixed",
    blobARadius: "100px 5px 5px 5px",
    blobTextBOpacity: "0",
    blobTextAFontSize: "6rem",
    blobTextADivColor: "white",
    blobTextASpanColor: "white",
    blobTextATop: "50%",
    blobTextALeft: "calc(50vw - 300px)",
    blobTextBTop: "43%",
    blobTextBLeft: "32.5%",
    blobTextBColor: "white",
    blobArrowTop: "68%",
    blobArrowLeft: "40vw",
    blobArrowColor: "white",
    blobArrowOpacity: "0",
  });
  store.subscribe(() => {
    const stateMap = store.getState();
    const currState = store.getState().authentication;
    if (currState.loggedIn) {
      setUser(currState.user);
      // setLandingPageFirstClicked(currState.users.generators);
    } else {
      setUser(null);
      setLoading(false);
    }
  });
  useEffect(() => {
    setLoading(user ? true : false);
  }, [user]);
  const handleSignUpForm = (e) => {
    const { id, value } = e.target;
    setSignupForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      signupForm.username &&
      signupForm.first_name &&
      signupForm.last_name &&
      signupForm.email &&
      signupForm.password &&
      signupForm.re_password &&
      signupForm.password === signupForm.re_password
    ) {
      dispatch(userActions.register(signupForm));
    }
  };
  const activateAccount = (e) => {
    console.log(window.location.href.split("/activate/")[1].split("/"));
    const keyList = window.location.href.split("/activate/")[1].split("/");
    dispatch(
      userActions.activate({
        uid: keyList[0],
        token: keyList[1],
      })
    );
    navigate("/login");
  };
  const handleSignInForm = (e) => {
    const { id, value } = e.target;
    setSigninForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSigIn = (e) => {
    e.preventDefault();
    if (signinForm.email && signinForm.password) {
      dispatch(userActions.login(signinForm));
      navigate("/");
    }
  };
  const handleSigOut = (e) => {
    e.preventDefault();
    dispatch(userActions.logout(signinForm));
  };
  const getDashboard = (url, clickedFolder) => {
    dispatch(userActions.getDashboard(url, clickedFolder));
  };
  const getMarket = (e) => {
    const param = createParam();
    dispatch(userActions.getMarket(param));
    navigate("/marketplace");
  };
  const getMarketParam = (param, type) => {
    setFilterChanged((prev) => !prev);
    const curr = marketParam;
    curr[type] = param;
    setMarketParam(curr);
  };
  const createParam = () => {
    let str = "";
    const list = Object.keys(marketParam);
    console.log(list, 2, "????????????????/", !marketParam["qty"]);
    for (let i = 0; i < list.length; i++) {
      console.log(list[i], "????????????????/", marketParam[list[i]]);
      // for (let p in marketParam) {
      if (marketParam[list[i]] !== "") {
        if (str[0] !== "?") {
          str += "?" + list[i] + "=" + marketParam[list[i]];
        } else {
          str += "&" + list[i] + "=" + marketParam[list[i]];
        }
      }
    }
    return str;
  };
  const handleScroll = (e) => {
    const position = window.pageYOffset;
    if (e.target.scrollTop < 1800) {
      const nextDimention = {
        ...dimensions,
        blobAPosition: "fixed",
        blobABottom: "10px",
        blobARadius: "100px 5px 5px 5px",
      };
      setDimensions(nextDimention);
    }
    if (e.target.scrollTop >= 1800 && e.target.scrollTop < 1900) {
      const nextDimention = {
        ...dimensions,
        blobAPosition: "fixed",
        blobABottom: "10px",
        blobARadius: "5px 5px 100px 5px",
      };
      setDimensions(nextDimention);
    }
    if (e.target.scrollTop >= 1900) {
      const nextDimention = {
        ...dimensions,
        blobAPosition: "fixed",
        blobABottom: "200px",
        blobARadius: "5px 5px 100px 5px",
      };
      setDimensions(nextDimention);
    }
    setScrollPosition(position);
  };
  const catchFirstClick = (e) => {
    if (!landingPageFirstClicked) {
      const nextDimention = {
        width: "calc(100vw - 163px)",
        height: "calc(100vh - 240px)",
        right: "81.5px",
        bottom: "80px",
        blobABottom: "1.5vmin",
        blobARadius: "100px 5px 5px 5px",
        blobAW: "2vmin",
        blobAH: "2vmin",
        blobAPosition: "fixed",
        blobTextBOpacity: "1",
        blobTextAFontSize: "3rem",
        blobTextADivColor: "var( --color_d)",
        blobTextASpanColor: "var(--color_c)",
        blobTextATop: "45%",
        blobTextALeft: "280px",
        blobTextBTop: "45%",
        blobTextBLeft: "80px",
        blobTextBColor: "var(--color_c)",
        blobArrowColor: "var(--color_c)",
        blobArrowTop: "65%",
        blobArrowLeft: "300px",
        blobArrowOpacity: "1",
      };
      setDimensions(nextDimention);
      setTimeout(() => {
        setLandingPageFirstClicked(true);
      }, 1500);
    }
  };
  return (
    <TbdContextProvider
      value={{
        user,
        newRec,
        userType,
        loading,
        openedTab,
        signupForm,
        dimensions,
        filterChanged,
        landing1Ref,
        dashboardData,
        scrollPosition,
        activeGenerator,
        landingPageFirstClicked,
        setNewRec,
        getMarket,
        setUserType,
        handleSigIn,
        handleSignUp,
        handleScroll,
        setOpenedTab,
        handleSigOut,
        getDashboard,
        setDimensions,
        getMarketParam,
        catchFirstClick,
        activateAccount,
        setDashboardData,
        handleSignInForm,
        handleSignUpForm,
        setScrollPosition,
        setAxctiveGenerator,
        setLandingPageFirstClicked,
      }}
    >
      {children}{" "}
    </TbdContextProvider>
  );
};
