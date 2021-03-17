import { API } from "../../backend";

// GET ALL USERS
export const getAllUser = (token) => {
  return fetch(`${API}/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
