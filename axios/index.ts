import axios from "axios";
const backendUrl = process.env.BACKEND_URL;

const axiosInstanceApi = axios.create({
  baseURL: backendUrl + "/api",
});
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

export { axiosInstanceApi, axiosInstance };
