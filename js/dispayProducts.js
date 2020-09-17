import { getFromLocal } from "./wishlistFunctions/getFromLocal.js";
import { saveToLocal } from "./wishlistFunctions/saveToLocals.js";

export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");

  const loaderContainer = document.querySelector(".loader-container ");
  loaderContainer.classList.add("hide");

  productsContainer.innerHTML = "";

  if (products.length > 0) {
    products.forEach((product) => {
      productsContainer.innerHTML += `<div class="product">
                                                <div class="product-item">
                                                <div class="img-container"><img class="img" src="${product.image}"></div>
                                                <h4>${product.name}</h4>
                                                <div class="price"><span>${product.price}</span> <i data-id="${product.id}" data-name="${product.name}" class="far fa-star"></i></div>                                          
                                                </div>
                                            </div>`;
    });
  } else {
    productsContainer.innerHTML = `<div class="product">No items in that price</div>`;
  }

  const favButton = document.querySelectorAll(".product i");

  const handleClick = (event) => {
    const { target } = event;
    target.classList.toggle("fas");
    target.classList.toggle("far");
    console.dir(event.target.parentNode);

    const id = target.dataset.id;
    const name = target.dataset;
    const price = event.target.parentNode.textContent;
    const currentWishlist = getFromLocal();

    const alreadyInWishList = currentWishlist.find((item) => item.id === id);

    if (!alreadyInWishList) {
      const product = { id, name, price };
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
