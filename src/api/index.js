import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://food-ordering-app-backend-ypwh.onrender.com/api/v1/user",
});
export const generalApi = axios.create({
  baseURL: "https://food-ordering-app-backend-ypwh.onrender.com/api/v1/app",
});
export const adminApi = axios.create({
  baseURL: "https://food-ordering-app-backend-ypwh.onrender.com/api/v1/admin",
});
export const riderApi = axios.create({
  baseURL: "https://food-ordering-app-backend-ypwh.onrender.com/api/v1/rider",
});
