import { SetAuthToken } from "../Services/helper";
// //isLogged in
// export const isLogged = () => {
//   const data = localStorage.getItem("data");
//   // console.log(data);
//   if (data == null) {
//     return false;
//   } else {
//     SetAuthToken();
//     return data;
//   }
// };
// //doLogin data set a localstorage

// export const doLogin = (data, next) => {
//   localStorage.setItem("data", JSON.stringify(data));
//   SetAuthToken();
//   next();
// };
// //do logout remove from localstorage
// export const doLogout = (next) => {
//   localStorage.removeItem("data");
//   next();
// };
// // get current user details
// export const getCurrentUserDetails = () => {
//   if (isLogged()) {
//     return JSON.parse(localStorage.getItem("data"))?.user;
//   } else {
//     return undefined;
//   }
// };

// doLogin and store token
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
  SetAuthToken();
};
//doLogout and storage clear
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};
//isLoggedin check user login
export const isLogged = () => {
  const data = localStorage.getItem("data");
  if (data !== null) {
    SetAuthToken();
    return data;
  } else {
    return false;
  }
};
// get current user details
export const getCurrentUserDetails = () => {
  if (isLogged) {
    return JSON.parse(localStorage.getItem("data"))?.user;
  } else {
    return undefined;
  }
};
