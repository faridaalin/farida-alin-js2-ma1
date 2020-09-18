import { displayProducts } from "./dispayProducts";

export const saveToLocal = (product) => {
  localStorage.setItem("wishlist", product);
};
export const getFromLocal = () => {
  const wishlist = localStorage.setItem("wishlist");
  displayProducts(wishlist);
};
