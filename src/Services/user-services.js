import { myAxios } from "./helper";

export const registration = (user) => {
  return myAxios
    .post(`api/user/register`, user)
    .then((response) => response.data);
};

export const userLogin = (user) => {
  return myAxios.post(`api/user/login`, user).then((response) => response.data);
};
