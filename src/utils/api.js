const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getClothingItems = () => {
  return fetch(baseUrl + "/items").then((res) => checkResponse(res));
};

const addClothingItem = ({ name, imageUrl, weather }) => {
  return fetch(baseUrl + "/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
};

const deleteClothingItem = (selectedCardId) => {
  return fetch(baseUrl + `/items/${selectedCardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

const addCardLike = (id) => {
  return fetch(baseUrl + `/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

const deleteCardLike = (id) => {
  return fetch(baseUrl + `/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export {
  baseUrl,
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  checkResponse,
  addCardLike,
  deleteCardLike,
};
