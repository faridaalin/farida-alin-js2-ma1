export const saveToLocal = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
