const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
  });
});
