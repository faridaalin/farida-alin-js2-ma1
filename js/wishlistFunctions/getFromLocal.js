export const getFromLocal = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));

  if (!wishlist) {
    return [];
  } else {
    return wishlist;
  }
};
