import axios from "axios";
const backendUrl = process.env.BACKEND_URL || "http://localhost:9237";

const axiosInstanceApiClient = axios.create({
  baseURL: backendUrl + "/api",
});

export { axiosInstanceApiClient };
