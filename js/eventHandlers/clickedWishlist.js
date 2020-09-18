import { getFromLocal } from "../wishlistFunctions/getFromLocal.js";
import { saveToLocal } from "../wishlistFunctions/saveToLocals.js";
import { cardHTML } from "../html/card.js";

export const handleClickedWishList = (products) => {
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

    const alreadyInWishList = currentWishlist.find((item) => {
      return item.productObject.id === productObject.id;
    });

    if (!alreadyInWishList) {
      const product = { productObject };
      currentWishlist.push(product);
      saveToLocal(currentWishlist);
    } else {
      const filteredWishlist = currentWishlist.filter((item) => {
        return item.productObject.id !== productObject.id;
      });
      saveToLocal(filteredWishlist);
    }
  };

  favButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
};
