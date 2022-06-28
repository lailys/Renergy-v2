import React, { useState, useRef, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../redux/reducers/authentication.reducer";

import axios from "axios";

import jwt_decode from "jwt-decode";

import { userActions } from "../redux/actions/user.actions";

export const TbdContext = React.createContext();

export const TbdContextProvider = TbdContext.Provider;
export const TbdContextConsumer = TbdContext.Consumer;

export const TbdContextComp = ({ children, store }) => {
  console.log(
    "5555>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>."
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const landing1Ref = useRef(null);
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
    const currState = store.getState().authentication;
    console.log(currState, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^???");
    if (currState.loggedIn) {
      setUser(currState.user);
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
    dispatch(userActions.activate({ uid: keyList[0], token: keyList[1] }));
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
    }
  };
  const handleSigOut = (e) => {
    e.preventDefault();
    dispatch(userActions.logout(signinForm));
  };
  const handleScroll = (e) => {
    console.log(window.innerHeight, " window.pageYOffset", e.target.scrollTop);
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
        landing1Ref,
        scrollPosition,
        landingPageFirstClicked,

        setNewRec,
        setUserType,
        handleScroll,
        setOpenedTab,
        setDimensions,
        catchFirstClick,
        activateAccount,
        handleSigIn,
        handleSignUp,
        handleSignInForm,
        handleSignUpForm,
        handleSigOut,
        setScrollPosition,
        setLandingPageFirstClicked,
      }}
    >
      {children}{" "}
    </TbdContextProvider>
  );
};
