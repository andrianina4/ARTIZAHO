import axios from "axios";
import { getSession } from "next-auth/react";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // || "http://localhost:9237";
const axiosInstanceApi = axios.create({
  // baseURL: "/backend/api",
  baseURL: backendUrl + "/api",
});

// const axiosInstanceApiClient = axios.create({
//   baseURL: backendUrl + "/api",
// });
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.clear();
//       window.location.reload();
//     }
//     return Promise.reject(error);
//   }
// );

const axiosInstance = axios.create({
  baseURL: backendUrl,
});

const getCurrentToken = async () => {
  const session = await getSession();
  return session?.user.access_token;
};

export {
  axiosInstanceApi,
  axiosInstance,
  getCurrentToken,
  // axiosInstanceApiClient,
};
