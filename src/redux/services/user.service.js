import { authHeader } from "../helpers/auth-header";
// import { axiosInstance } from "./api";

// import { memoizedRefreshToken } from "./refreshToken";

import axios from "axios";
// import { getInstance } from "./axiosInstance";
import jwt_decode from "jwt-decode";
import mem from "mem";

export const userService = {
  login,
  logout,
  register,
  activate,
  getToken,
  getDashboard,
  getMarket,
};

function handleError(err) {
  let error = [];
  if (err.response) {
    // Request made and server responded
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    error = [err.response.status];
    for (let i in err.response.data) {
      error.push(err.response.data[i][0]);
    }
  } else if (err.request) {
    console.log(err.request);
    error = ["Unknown error has been occured"];
  } else {
    console.log("Error", err.message);
    error = [err.message];
  }
  return Promise.reject(error.join(" "));
}

function register(user) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:3000/auth/users/",
    data: user,
    headers: {},
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}

function activate(info) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:3000/auth/users/activation/",
    data: info,
    headers: {},
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}

function login(user) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:3000/api/token/",
    headers: {},
    data: user,
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("authTokens");
}

function getToken() {
  const user = JSON.parse(localStorage.getItem("authTokens"));
  return user ? user.accessToken : "";
}
var instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

function getInstance() {
  instance.interceptors.request.use(
    (config) => {
      const tokens = JSON.parse(localStorage.getItem("authTokens"));
      config.headers["Authorization"] = "Bearer " + tokens.access;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const config = err ? err.config : "";
      if (401 === err.response.status && !config.sent) {
        config.sent = true;
        try {
          const tokens = JSON.parse(localStorage.getItem("authTokens"));
          var refreshConfig = {
            method: "post",
            url: "http://127.0.0.1:3000/api/token/refresh/",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              refresh: tokens.refresh,
            },
          };
          const response = await axios(refreshConfig);
          const { access } = response.data;
          if (!access) {
            localStorage.removeItem("user");
            localStorage.removeItem("authTokens");
          }
          const updatedAuthToken = JSON.parse(
            localStorage.getItem("authTokens")
          );
          updatedAuthToken.access = access;
          localStorage.setItem("authTokens", JSON.stringify(updatedAuthToken));
          localStorage.setItem("user", jwt_decode(access));
          config.headers = {
            "content-type": "application/json",
            Authorization: "Bearer " + access,
          };
        } catch {
          localStorage.removeItem("user");
          localStorage.removeItem("authTokens");
        }
        return instance(config);
      }
      return Promise.reject(err);
    }
  );
  return instance;
}

async function getMarket(param) {
  console.log(
    `/order/search${param}`,
    "+++++++++++++++++++++++++++++++++++++++>>>"
  );
  getInstance();
  return instance
    .get(`/order/search${param}`)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}
async function getDashboard(url) {
  getInstance();
  return instance
    .get(url)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}
