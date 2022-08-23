import API from "services/rootApi";

export const getFavPoducts = () => API.get("/favorite");
