import { authHeader } from "../helpers/auth-header";
import { axiosInstance } from "./api";

// import { memoizedRefreshToken } from "./refreshToken";

import axios from "axios";
import jwt_decode from "jwt-decode";
import mem from "mem";

export const userService = {
  login,
  logout,
  register,
  activate,
  getToken,
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
  return user?.accessToken;
}

async function getMarket() {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
      const config = err?.config;

      if (err?.response?.status === 401 && !config?.sent) {
        config.sent = true;
        try {
          const tokens = JSON.parse(localStorage.getItem("authTokens"));
          console.log(tokens.access, "11111111111--------------------->");
          var refreshConfig = {
            method: "post",
            url: "http://127.0.0.1:3000/api/token/refresh/",
            headers: { "Content-Type": "application/json" },
            data: { refresh: tokens.refresh },
          };
          const response = await axios(refreshConfig);
          const { access } = response.data;
          console.log(access, "222222222--------------------->");
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

          // delete config.headers.Authorization;
          config.headers = {
            "content-type": "application/json",
            Authorization: "Bearer " + access,
          };
        } catch {
          localStorage.removeItem("user");
          localStorage.removeItem("authTokens");
        }

        console.log(
          "3333333--------------------------------->",
          config,
          "-------->"
        );

        return instance(config);
      }
      return Promise.reject(err);
      // const originalConfig = err.config;
      // console.log(
      //   "err.config._retry%%%%%%%%%>>>>>>>>>>>>>>>>>>>>>>.s",
      //   err.config._retry,
      //   "err.response.status%%%%%%%%%>>>>>>>>>>>>>>>>>>>>>>.s",
      //   err.response.status,
      //   "err%%%%%%%%%>>>>>>>>>>>>>>>>>>>>>>.s",
      //   err.response.data.message,
      //   "err%%%%%%%%%>>>>>>>>>>>>>>>>>>>>>>.s",
      //   err,
      //   "%%%%%%%%%>>>>>>>>>>>>>>>>>>>>>>.s",
      //   err.config
      // );
      // if (err.response) {
      //   // originalConfig._retry = false;
      //   // Access Token was expired
      //   if (err.response.status === 401 && err.response.data.message==="Request failed with status code 401") {
      //     console.log(
      //       "originalConfig._retry=======================================",
      //       originalConfig._retry
      //     );
      //     originalConfig._retry = true;
      //     try {
      //       const result = await refreshToken("KKKK");
      //       console.log("------", result);
      //       instance.defaults.headers.common["Authorization"] = result;
      //       console.log("------>>>>>>>>>>>>>>>>>>>>>>>>", originalConfig);
      //       return instance(originalConfig);
      //     } catch (_error) {
      //       if (_error.response && _error.response.data) {
      //         return Promise.reject(_error.response.data);
      //       }
      //       return Promise.reject(_error);
      //     }
      //   }
      //   if (err.response.status === 403 && err.response.data) {
      //     return Promise.reject(err.response.data);
      //   }
      // }
      // return Promise.reject(err);
    }
  );
  return instance
    .get("/rec-token/list/")
    .then((response) => {
      return response;
    })
    .catch(handleError);
}
