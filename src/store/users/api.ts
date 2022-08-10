import API from "services/rootApi";

export const getUsers = () => API.get("/user");
