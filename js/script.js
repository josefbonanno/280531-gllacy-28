let openPopup = document.querySelector(".contacts_button");
let popup = document.querySelector(".feedback");
let closePopup = popup.querySelector(".feedback-close");
let openLogin = document.querySelector(".user-login");
let hideLogin = document.querySelector(".hide-login");

openPopup.addEventListener("click", function() {
  popup.classList.add("feedback_show");
})

closePopup.addEventListener("click", function() {
  popup.classList.remove("feedback_show");
})

openLogin.addEventListener("click", function() {
  hideLogin.classList.toggle("hide-login-show");
})
