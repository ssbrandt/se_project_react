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

export { getClothingItems };
