import axios from "axios";

export const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

function getLocalRefreshToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.refresh : null;
};

function getLocalAccessToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.access : null;
};

function updateLocalAccessToken(token) {
  let user = JSON.parse(localStorage.getItem("user"));
  user.access = token;
  localStorage.setItem("user", JSON.stringify(user));
};

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
};

function setUser(user) {
  console.log(JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));
};

function removeUser() {
  localStorage.removeItem("user");
};
