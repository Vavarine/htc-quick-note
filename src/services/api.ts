import axios from "axios";

const token =
  localStorage.getItem("@QuickNote:token") || sessionStorage.getItem("@QuickNote:token");

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

if (token) api.defaults.headers.authorization = `Bearer ${token}`;

export { api };
