import axios from "axios";

const addProduct = axios.create({
  baseURL:
    "https://c11-19-m-javareact-production.up.railway.app/api/product/"
});

const getProduct = axios.create({
  baseURL:
    "https://c11-19-m-javareact-production.up.railway.app/api/product/"
});

export { addProduct, getProduct };
