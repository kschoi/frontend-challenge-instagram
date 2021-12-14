import axios from "axios";

export const addUsers = (data) =>
  axios.post(`http://localhost:4000/users`, data);

export const getUsers = (data) =>
  axios.get(`http://localhost:4000/users`, { params: data });
