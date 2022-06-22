import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_UOL_TEST_API,
});

export default api;
