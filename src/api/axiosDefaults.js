import axios from "axios";

axios.defaults.baseURL = "https://first-drf-api.herokuapp.com";
axios.defaults.headers.post["Content_Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;