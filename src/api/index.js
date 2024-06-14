import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/user",
});
export const generalApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/app",
});
export const adminApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/admin",
});
export const riderApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/rider",
});
