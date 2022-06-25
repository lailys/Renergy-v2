import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { userActions } from "../redux/actions/user.actions";

export const TbdContext = React.createContext();

export const TbdContextProvider = TbdContext.Provider;
export const TbdContextConsumer = TbdContext.Consumer;

export const TbdContextComp = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(userActions.logout());
  // }, []);

  const landing1Ref = useRef(null);
  const [landingPageFirstClicked, setLandingPageFirstClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userType, setUserType] = useState("client");
  const [openedTab, setOpenedTab] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [newRec, setNewRec] = useState({});
  const [signupForm, setSignupForm] = useState({});
  const [signinForm, setSigninForm] = useState({});
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
  const handleSignInForm = (e) => {
    const { id, value } = e.target;
    setSigninForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSiginUp = (e) => {
    e.preventDefault();
    var config = {
      method: "post",
      url: "http://127.0.0.1:3000/auth/jwt/create",
      headers: signinForm,
      data: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
      navigate("/login");
    }
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
        newRec,
        userType,
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
        handleSignUp,
        handleSiginUp,
        handleSignInForm,
        handleSignUpForm,
        setScrollPosition,
        setLandingPageFirstClicked,
      }}
    >
      {children}{" "}
    </TbdContextProvider>
  );
};
