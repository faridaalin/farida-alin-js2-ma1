import { getFromLocal } from "./wishlistFunctions/getFromLocal.js";
import { saveToLocal } from "./wishlistFunctions/saveToLocals.js";
import { cardHTML } from "./html/card.js";

export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");
  const loaderContainer = document.querySelector(".loader-container ");
  const wishlist = getFromLocal();

  loaderContainer.classList.add("hide");

  productsContainer.innerHTML = "";

  if (products.length > 0) {
    products.forEach((product) => {
      let cssClass = "far";

      const doesObjectExist = wishlist.find(
        (item) => parseFloat(item.id) === product.id
      );

      doesObjectExist ? (cssClass = "fas") : cssClass;

      cardHTML(
        productsContainer,
        product.name,
        product.image,
        product.price,
        product.id
      );
    });
  } else {
    productsContainer.innerHTML = `<div class="product">No items in that price</div>`;
  }

  const favButton = document.querySelectorAll(".product i");

  const handleClick = (event) => {
    const { target } = event;

    target.classList.toggle("fas");
    target.classList.toggle("far");

    const id = target.dataset.id;
    let productObject;

    products.forEach((product) => {
      if (product.id === parseFloat(id)) {
        productObject = product;
      }
    });

    const currentWishlist = getFromLocal();

    const alreadyInWishList = currentWishlist.find((item) => item.id === id);

    if (!alreadyInWishList) {
      const product = { productObject };
      currentWishlist.push(product);
      saveToLocal(currentWishlist);
    } else {
      const filteredWishlist = currentWishlist.filter((item) => item.id !== id);
      saveToLocal(filteredWishlist);
    }
  };

  favButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  const saveToLocal = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
};
