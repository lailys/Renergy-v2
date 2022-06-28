// import config from 'config';
import { authHeader } from "../helpers/auth-header";

import axios from "axios";

export const userService = {
  login,
  logout,
  register,
  activate,
  refreshToken,
  //   getAll,
  //   getById,
  //   update,
  //   delete: _delete
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
    url: "http://127.0.0.1:3000/auth/jwt/create",
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
function refreshToken(user) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:3000/auth/jwt/create",
    headers: {},
    data: user,
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch(handleError);
}
