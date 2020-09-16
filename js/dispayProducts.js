export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".products-container");

  const loaderContainer = document.querySelector(".loader-container ");
  loaderContainer.classList.add("hide");

  productsContainer.innerHTML = "";
  console.log(products === []);

  if (products.length > 0) {
    products.forEach((product) => {
      productsContainer.innerHTML += `<div class="product">
                                                <div class="product-item">
                                                <div class="img-container"><img class="img" src="${product.image}"></div>
                                                <h4>${product.name}</h4>
                                                <p>${product.price}</p>
                                                </div>
                                            </div>`;
    });
  } else {
    productsContainer.innerHTML = `<div class="product">No items in that category</div>`;
  }
};
