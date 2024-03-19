import axios from "axios";
import { signOut } from "next-auth/react";
const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:9237";

const axiosInstanceApiClient = axios.create({
  baseURL: backendUrl + "/api",
});

axiosInstanceApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //   localStorage.clear();
      //   window.location.reload();
      console.log("Lany Token");
      signOut({ redirect: true, callbackUrl: "/" });
    }
    return Promise.reject(error);
  }
);

export { axiosInstanceApiClient };
