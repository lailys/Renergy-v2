import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/map";
import { getInstance } from "../utils/axiosInctance";
import { getCorrectDataMap, dashboardUrlMap, pageMap } from "../utils/map";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

export const TbdContext = React.createContext();

export const TbdContextProvider = TbdContext.Provider;
export const TbdContextConsumer = TbdContext.Consumer;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const TbdContextComp = ({ children }) => {
  // const pageMap = {
  //   "/": "home-btn",
  //   "/home": "home-btn",
  //   "/signin": "authentication-in-btn",
  //   "/signup": "authentication-up-btn",
  //   "/register": "registration-btn",
  //   "/stripe-payment-add": "stripe-payment-page-add",
  //   "/stripe-payment-withdraw": "stripe-payment-page-withdraw",
  // };
  const navigate = useNavigate();
  const instance = getInstance();
  const blurBackDropRef = useRef(null);
  const imgBackDropRef = useRef(null);

  const [error, setError] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [backdropRotation, setBackdropRotation] = useState(55);
  const [amount, setAmount] = useState(0);
  const [popupId, setPopupId] = useState("");
  const [recId, setRecId] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isSideSet, setIsSideSet] = useState(false);
  const [dashboardList, setDashboardList] = useState([]);
  const [availableGens, setAvailableGens] = useState([]);
  const [filterChanged, setFilterChanged] = useState(false);
  const [dashboardTableUpdate, setDashboardTableUpdate] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [draftedOrder, setDraftedOrder] = useState({
    side: null,
    form: null,
  });
  const [dashboardFolder, setDashboardFolder] = useState(
    window.location.pathname.split("/dashboard/")[1] || "generator"
  );
  const [marketplaceRowsCount, setMarketplaceRowsCount] = useState(0);
  const [dashboardRowsCount, setDashboardRowsCount] = useState([
    "generator",
    0,
  ]);

  const [currentPage, setCurrentPage] = useState(
    pageMap[window.location.pathname][0]
  );
  const [userLogedin, setUserLogedin] = useState(
    localStorage.getItem("user") ? localStorage.getItem("user") : null
  );
  const [marketParam, setMarketParam] = useState({
    side: "",
    owner: "",
    qty: "",
    certifying_bodies_for_ui: "",
    vintage_dt_min: "",
  });
  useEffect(() => {
    backDropControl();
  }, []);
  useEffect(() => {
    function handleResize() {
      backDropControl();
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      (window.location.pathname === "/dashboard" ||
        window.location.pathname === "/marketplace") &&
      !userLogedin
    )
      navigate("/signin");
  });
  const backDropControl = () => {
    blurBackDropRef.current.style.top = `-40vh`;
    if (window.innerWidth >= 1350) {
      blurBackDropRef.current.style.left = `calc(( 200vh - 40vw) * -1)`;
      blurBackDropRef.current.style.transform = `rotate(${
        pageMap[window.location.pathname][1] || 55
      }deg)`;
    } else if (window.innerWidth >= 820 && window.innerWidth < 1350) {
      blurBackDropRef.current.style.left = `calc(( 200vh - 55vw) * -1)`;
      blurBackDropRef.current.style.transform = `rotate(90deg)`;
    } else if (window.innerWidth < 820) {
      blurBackDropRef.current.style.left = `calc(( 200vh - 100vw) * -1)`;
    }
  };
  const PageNavigation = (e) => {
    if (
      e.target.classList.contains("link") &&
      currentPage !== pageMap[window.location.pathname][0] &&
      blurBackDropRef.current &&
      window.innerWidth >= 1350
    ) {
      const rotation = pageMap[window.location.pathname][1] || 55;
      blurBackDropRef.current.style.transform = `rotate(${rotation + "deg"})`;
      setBackdropRotation(rotation);
    }
    setDashboardFolder("generator");
    setCurrentPage(pageMap[window.location.pathname][0]);
  };
  const rotateBackdrop = (page) => {
    navigate(page);
    if (blurBackDropRef.current) {
      const rotation = pageMap[window.location.pathname][1] || 55;
      blurBackDropRef.current.style.transform = `rotate(${rotation + "deg"})`;
      setBackdropRotation(rotation);
      setCurrentPage(pageMap[page][0]);
    }
  };

  const login = (e, user) => {
    e.preventDefault();
    var config = {
      method: "post",
      url: url + "api/token/",
      headers: {},
      data: user,
    };

    return axios(config)
      .then((response) => {
        const currUser = jwt_decode(response.data.access);
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        localStorage.setItem("user", currUser);
        localStorage.setItem("isAdmin", response.data.is_superuser);
        setUserLogedin(currUser);
        rotateBackdrop("/home");
        setError("");
        return response;
      })
      .catch(handleError);
  };
  const logout = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("authTokens");
    setPopupId("");
    setError("");
    setUserLogedin(null);
    rotateBackdrop("/home");
    navigate("/home");
  };
  const handleError = (err) => {
    let error = [];
    if (err.response) {
      console.log(err.response);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      error = [err.response.status];
      for (let i in err.response.data) {
        error.push(err.response.data[i]);
      }
    } else if (err.request) {
      error = ["Unknown error has been occured"];
    } else {
      error = [err.message];
    }

    setError(error.join(" "));
    return Promise.reject(error.join(" "));
  };
  const getMarketFilterParam = (param) => {
    setFilterChanged((prev) => !prev);
    const paramList = param.split(",");
    const curr = marketParam;
    curr[paramList[2]] = paramList[2] !== " " ? paramList[1] : "";
    setMarketParam(curr);
  };
  const createParam = () => {
    let str = "?is_active=True";
    const list = Object.keys(marketParam);
    for (let i = 0; i < list.length; i++) {
      if (list[i] === "side")
        marketParam[list[i]] === "" || marketParam[list[i]] === "ALL"
          ? setIsSideSet(false)
          : setIsSideSet(true);
      if (marketParam[list[i]] === "") continue;
      str += "&" + list[i] + "=" + marketParam[list[i]];
    }
    return str;
  };
  const getMarketplace = () => {
    const param = createParam();
    return instance
      .get(`/order/search${param}`)
      .then((response) => {
        return response;
      })
      .catch(handleError);
  };
  const navigateToMarketplace = (e) => {
    navigate(userLogedin ? "/marketplace" : "/signin");
  };
  const marketOrderExec = (e) => {
    console.log(
      e.target.textContent.toLowerCase(),
      e.target.id.split("buySell-")[1]
    );
    return instance
      .put(`/order/exec/${e.target.id.split("buySell-")[1]}/`)
      .then((response) => {
        return response;
      })
      .catch(handleError);
  };
  const switchDashboardFolder = (e) => {
    const clickedFolder = e.target.getAttribute("data-title");
    if (clickedFolder !== "" && clickedFolder) {
      navigate("/dashboard/" + clickedFolder);
      setDashboardFolder(clickedFolder);
      // getDashboard(clickedFolder);
    }
  };
  const getDashboard = (folder) => {
    return instance
      .get(dashboardUrlMap[folder])
      .then((response) => {
        setDashboardList(response.data);
        return response;
      })
      .catch(handleError);
  };
  const navigateToDashboard = (e) => {
    navigate(userLogedin ? "/dashboard" : "/signin");
  };
  const getBalanceAmount = (e) => {
    instance
      .get("/funds/rbusd-balance/")
      .then((response) => {
        setAmount(
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(response.data)
        );
        return response;
      })
      .catch(handleError);
  };
  const addNewGenerator = (e, form, rest) => {
    e.preventDefault();
    const formIsValid = validateForm(form);
    if (formIsValid) {
      setError("");
      instance
        .post("/generator-asset/", {
          ...form,
          ...rest,
        })
        .then((response) => {
          setPopupId("");
          setDashboardTableUpdate((prev) => !prev);
          return response;
        })
        .catch(handleError);
    }
  };
  const addNewRec = (e, form) => {
    e.preventDefault();
    const formIsValid = validateForm(form);
    if (formIsValid) {
      setError("");
      instance
        .post("/rec-token/mint/", form)
        .then((response) => {
          setPopupId("");
          setDashboardTableUpdate((prev) => !prev);
          return response;
        })
        .catch(handleError);
    }
  };
  const recAction = (action, form) => {
    instance
      .put(`/rec-token/${action}/${recId}/`, form)
      .then((response) => {
        setPopupId("");
        setDashboardTableUpdate((prev) => !prev);
        return response;
      })
      .catch(handleError);
  };
  const submitNewOrder = (e, type, id) => {
    e.preventDefault();
    setError("");
    instance
      .put(`/order/submit/${id}/`)
      .then((response) => {
        setPopupId("");
        setDashboardTableUpdate((prev) => !prev);
        return response;
      })
      .catch(handleError);
  };
  const cancelOrder = (e, id) => {
    e.preventDefault();
    setError("");
    instance
      .put(`/order/cancel/${id}/`)
      .then((response) => {
        setPopupId("");
        setDashboardTableUpdate((prev) => !prev);
        return response;
      })
      .catch(handleError);
  };
  const draftNewOrder = (e, type, form, id) => {
    e.preventDefault();
    if (!id) {
      const formIsValid = validateForm(form);
      if (formIsValid) {
        instance
          .post(`/order/${type}/`, form)
          .then((response) => {
            setPopupId("");
            setDashboardTableUpdate((prev) => !prev);
            return response;
          })
          .catch(handleError);
      }
    } else {
      instance
        .put(`/order/${type}/${id}/`, form)
        .then((response) => {
          setPopupId("");
          setDashboardTableUpdate((prev) => !prev);
          return response;
        })
        .catch(handleError);
    }

    setError("");
  };
  const editOrder = (e, order) => {
    const filledForm =
      order.side === "S"
        ? (({
            id,
            order_type,
            qty,
            price_start,
            price_end,
            end_dt_epoch_secs,
            rec_token,
          }) => ({
            id,
            order_type,
            qty,
            price_start,
            price_end,
            end_dt_epoch_secs,
            rec_token,
          }))(order)
        : (({
            id,
            order_type,
            qty,
            price_start,
            price_end,
            end_dt_epoch_secs,
            vintage_dt_min,
            generator_types,
            certifying_bodies,
            states,
          }) => ({
            id,
            order_type,
            qty,
            price_start,
            price_end,
            end_dt_epoch_secs,
            vintage_dt_min,
            generator_types,
            certifying_bodies,
            states,
          }))(order);
    setDraftedOrder({
      side: order.side === "S" ? "sell" : "buy",
      form: filledForm,
    });
    setPopupId("Orders");
  };
  const getAvailableGens = () => {
    instance
      .get("/generator-asset/")
      .then((response) => {
        setAvailableGens(response.data);
      })
      .catch(handleError);
  };

  const getCorrectData = (title, value) => {
    try {
      if (
        title === "current_price" ||
        title === "price" ||
        title === "price_start" ||
        title === "price_end"
      ) {
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "USD",
        }).format(value || 0);
      } else if (
        title === "withdrawn_dt" ||
        title === "timestamp" ||
        title === "end_dt"
      ) {
        return new Date(value).toISOString().split("T")[0];
      } else {
        return getCorrectDataMap[title][value];
      }
    } catch (error) {
      setError(error);
    }
  };

  const validateForm = (form) => {
    let err = "";
    err += Object.keys(form)
      .filter((key) => !form[key] && key !== "decomissioned_dt")
      .join(", ");
    if (err) {
      setError("Please Fill out: " + err);
      return false;
    } else {
      return true;
    }
  };
  const clickCatcher = (e) => {
    if (e.target.classList.contains("navIcon")) {
      setOpenMenu((prev) => !prev);
    }
    if (
      (e.target.classList.contains("shrinked") &&
        e.target.classList.contains("shrinkedBtn")) ||
      (!e.target.classList.contains("shrinked") &&
        !e.target.classList.contains("navIcon"))
    ) {
      setOpenMenu(false);
      setError("");
    }
    if (
      e.target.classList.contains("NavLink") ||
      e.target.classList.contains("auth-extra-link")
    ) {
      setError("");
    }
  };
  return (
    <TbdContextProvider
      value={{
        error,
        amount,
        pageMap,
        popupId,
        openMenu,
        instance,
        isSideSet,
        currentPage,
        userLogedin,
        draftedOrder,
        dashboardList,
        availableGens,
        filterChanged,
        imgBackDropRef,
        blurBackDropRef,
        dashboardFolder,
        windowDimensions,
        dashboardRowsCount,
        dashboardTableUpdate,
        marketplaceRowsCount,
        paymentMessage,
        setPaymentMessage,
        login,
        logout,
        setError,
        setRecId,
        editOrder,
        recAction,
        setAmount,
        addNewRec,
        setPopupId,
        setOpenMenu,
        cancelOrder,
        createParam,
        setIsSideSet,
        getDashboard,
        draftNewOrder,
        rotateBackdrop,
        submitNewOrder,
        setCurrentPage,
        getMarketplace,
        PageNavigation,
        getCorrectData,
        addNewGenerator,
        setDraftedOrder,
        marketOrderExec,
        getAvailableGens,
        setFilterChanged,
        getBalanceAmount,
        setWindowDimensions,
        navigateToDashboard,
        getMarketFilterParam,
        navigateToMarketplace,
        setDashboardRowsCount,
        switchDashboardFolder,
        setMarketplaceRowsCount,
      }}
    >
      <div
        onClick={clickCatcher}
        style={{
          overflow: "hidden",
        }}
      >
        {" "}
        {children}{" "}
      </div>{" "}
    </TbdContextProvider>
  );
};
