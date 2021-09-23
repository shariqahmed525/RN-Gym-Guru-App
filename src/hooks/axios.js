import Axios from "axios";
import BASE_URL from "../config";
import { store } from "../redux";

const axios = Axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const setAxiosToken = async (token) => {
  if (!token) {
    const {
      userReducer: { userData },
    } = store.getState();
    axios.defaults.headers.common.Authorization = `Bearer ${userData?.jwtToken}`;
    return;
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axios;
