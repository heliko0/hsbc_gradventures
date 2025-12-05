import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-loan-api-8miei22m.nw.gateway.dev",
});

export default api;