import axios from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:9237";

const axiosInstanceApiClient = axios.create({
  baseURL: backendUrl + "/api",
});

export { axiosInstanceApiClient };
