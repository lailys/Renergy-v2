import axios from "axios";
import jwt_decode from "jwt-decode";

export var instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getInstance = () => {
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
          const {
            access
          } = response.data;
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
