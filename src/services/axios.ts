import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
