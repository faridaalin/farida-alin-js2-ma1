import { displayProducts } from "./dispayProducts.js";
import { fetchApi } from "./fetch.js";
import { searchProducts } from "./search.js";

const url = `https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products`;

fetchApi(url, displayProducts, searchProducts);
