import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.x_api_url,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.x_api_key,
  },
});
