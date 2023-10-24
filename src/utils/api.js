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

const addClothingItem = ({ name, link, weather }) => {
  return fetch(baseUrl + "/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, link, weather }),
  }).then(checkResponse);
};

export { getClothingItems, addClothingItem };
