import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-app-heroku.herokuapp.com/",
});

export default instance;
