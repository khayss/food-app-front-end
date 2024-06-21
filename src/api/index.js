import axios from "axios";

const prefix = "https://food-ordering-app-backend-ypwh.onrender.com/api/v1";
// const prefix = "http://localhost:4000/api/v1";

export const userApi = axios.create({
  baseURL: prefix + "/user",
});
export const generalApi = axios.create({
  baseURL: prefix + "/app",
});
export const adminApi = axios.create({
  baseURL: prefix + "/admin",
});
export const riderApi = axios.create({
  baseURL: prefix + "/rider",
});
