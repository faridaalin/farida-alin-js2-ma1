export const cardHTML = (tag, name, image, price, id, cssClass) => {
  return (tag.innerHTML += `<div class="product">
                                                <div class="product-item">
                                                <div class="img-container"><img class="img" src="${image}"></div>
                                                <h4>${name}</h4>
                                                <div class="price"><span>${price}</span> <i data-id="${id}" data-name="${name}" class="${cssClass} fa-star"></i></div>
                                                </div>
                                              </div>`);
};
