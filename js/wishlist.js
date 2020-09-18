import { getFromLocal } from "./wishlistFunctions/getFromLocal.js";
import { cardHTML } from "./html/card.js";
const wishlist = getFromLocal();

const renderWishList = (wishlist) => {
  const productsContainer = document.querySelector(".products-container");
  const loaderContainer = document.querySelector(".loader-container ");

  loaderContainer.style.display = "none";

  if (wishlist.length === 0) {
    productsContainer.innerHTML = `<div class="error ">Your wishlist is empty</div>`;
  } else {
    wishlist.forEach((wish) => {
      const image = wish.productObject.image;
      const price = wish.productObject.price;
      const name = wish.productObject.name;
      const id = wish.productObject.id;
      const cssClass = "fas";

      cardHTML(productsContainer, name, image, price, id, cssClass);
    });
  }
};

renderWishList(wishlist);
