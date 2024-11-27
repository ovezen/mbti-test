import axios from "axios";

// API 인스턴스
const API = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
