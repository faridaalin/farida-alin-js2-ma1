import { displayProducts } from "./dispayProducts.js";
export const searchProducts = (data) => {
  const inputSearch = document.querySelector(".input-search");

  inputSearch.addEventListener("keyup", (event) => {
    event.preventDefault();
    const searchValue = event.target.value.trim();

    const filteredProducts = data.filter(
      (item) => parseFloat(item.price) <= parseFloat(searchValue)
    );

    displayProducts(filteredProducts);
  });
};
