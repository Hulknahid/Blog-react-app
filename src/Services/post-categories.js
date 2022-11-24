import { myAxios } from "./helper";
export const getAllCategories = () => {
  return myAxios.get(`/api/category`).then((response) => response.data);
};
