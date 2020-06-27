let openLogin = document.querySelector(".user-login");
let hideLogin = document.querySelector(".hide-login");
let cart = document.querySelector(".user-full_cart");
let hideCart = document.querySelector(".hide-cart");

openLogin.addEventListener("click", function() {
  hideLogin.classList.toggle("hide-login-show");
})

cart.addEventListener("click", function() {
  hideCart.classList.toggle("visually-hidden");
})
