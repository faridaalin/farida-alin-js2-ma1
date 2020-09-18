import { getFromLocal } from "./wishlistFunctions/getFromLocal.js";
import { saveToLocal } from "./wishlistFunctions/saveToLocals.js";
import { handleClickedWishList } from "./eventHandlers/clickedWishlist.js";
import { cardHTML } from "./html/card.js";

export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");
  const loaderContainer = document.querySelector(".loader-container ");
  const wishlist = getFromLocal();

  loaderContainer.style.display = "none";

  productsContainer.innerHTML = "";

  if (products.length > 0) {
    products.forEach((product) => {
      let cssClass = "far";

      const doesObjectExist = wishlist.find(
        (item) => parseFloat(item.productObject.id) === product.id
      );

      doesObjectExist ? (cssClass = "fas") : cssClass;

      cardHTML(
        productsContainer,
        product.name,
        product.image,
        product.price,
        product.id,
        cssClass
      );
    });
  } else {
    productsContainer.innerHTML = `<div class="product">No items in that price</div>`;
  }

  handleClickedWishList(products);

  saveToLocal(wishlist);
};
