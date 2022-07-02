import {
  axiosInstance
} from "./api";
import {
  userActions
} from "../actions/user.actions";

const setup = (store) => {
  console.log("-----------------------------", store)
  axiosInstance.interceptors.request.use(
    async (config) => {
        const tokens = JSON.parse(localStorage.getItem("authTokens"));
        if (!tokens.access) {
          config.headrs = {
            ...config.headrs,
            Authorization: 'Bearer ' + tokens.access
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error);
      }
  );
  const {
    dispatch
  } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== "/api/token/" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const tokens = JSON.parse(localStorage.getItem("authTokens"));
            const rs = await axiosInstance.post("/api/token/refresh/", {
              refresh: tokens.refresh,
            });
            const {
              access
            } = rs.data;
            dispatch(userActions.refreshToken(access));
            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
};
export default setup;
