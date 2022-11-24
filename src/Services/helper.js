import axios from "axios";

const BASE_URL = "https://blog-api-rest-api.herokuapp.com/";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

// export const setAuthToken = () => {
//   const token = JSON.parse(localStorage.getItem("data"));
//   if (token) {
//     return (myAxios.defaults.headers.common[
//       "Athorization"
//     ] = `Bearer ${token.access_token}`);
//   } else {
//     return delete myAxios.defaults.headers.common["Athorization"];
//   }
// };

// export const SetAuthToken = () => {
//   const token = JSON.parse(localStorage.getItem("data"));
//   // console.log(token);
//   if (token) {
//     myAxios.defaults.headers.common[
//       "Authorization"
//     ] = `Bearer ${token.access_token}`;
//   } else {
//     delete myAxios.defaults.headers.common["Authorization"];
//   }
// };

export const SetAuthToken = () => {
  const token = JSON.parse(localStorage.getItem("data"));
  if (token) {
    myAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token.access_token}`;
  } else {
    delete myAxios.defaults.headers.common["Authorization"];
  }
};
