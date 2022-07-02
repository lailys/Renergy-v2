import axios from "axios";
import jwt_decode from "jwt-decode";

export const TokenService = {
  refreshToken,
};

function refreshToken(access) {
  const updatedAuthToken = JSON.parse(localStorage.getItem("authTokens"));
  updatedAuthToken.access = access;
  localStorage.setItem("authTokens", JSON.stringify(updatedAuthToken));
  localStorage.setItem("user", jwt_decode(access));
}
