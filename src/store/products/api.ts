import API from "services/rootApi";

export const getProducts = () => API.get("/products");
