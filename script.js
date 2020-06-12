const products = document.querySelectorAll("a.btn");

products.forEach((product) => {
  product.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode);
  });
});
