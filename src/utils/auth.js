import { baseUrl, checkResponse } from "./api";

const postSignUp = ({ email, password, name, avatar }) => {
  return fetch(baseUrl + "/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then(checkResponse);
};

const postLogIn = ({ email, password }) => {
  return fetch(baseUrl + "/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

const getUserInfo = () => {
  return fetch(baseUrl + "/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

const editProfile = ({ name, avatar }) => {
  return fetch(baseUrl + "/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
};
export { postSignUp, postLogIn, getUserInfo, editProfile };
