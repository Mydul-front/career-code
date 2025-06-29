import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  const { user, logOut } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOut()
          .then(() => {
            console.log("sign out user for 401 status code");
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
