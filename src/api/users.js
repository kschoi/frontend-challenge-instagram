import axios from "axios";

export const addUsers = (data) =>
  axios.post(`http://localhost:4000/users`, data);
