export const displayProducts = (products) => {
  const productsContainer = document.querySelector(".products");

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
                                                <div class="price"><span>${product.price}</span> <i class="far fa-star"></i></div>                                          
                                                </div>
                                            </div>`;
    });
  } else {
    productsContainer.innerHTML = `<div class="product">No items in that category</div>`;
  }
};
