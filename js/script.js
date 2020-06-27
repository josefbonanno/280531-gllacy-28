let openPopup = document.querySelector(".contacts_button");
let popup = document.querySelector(".feedback");
let closePopup = popup.querySelector(".feedback-close");
let openLogin = document.querySelector(".user-login");
let hideLogin = document.querySelector(".hide-login");

openPopup.addEventListener("click", function() {
  popup.classList.add("feedback_show");
  document.querySelector(".site-wrapper").style.opacity = "0.2";
});

closePopup.addEventListener("click", function() {
  document.querySelector(".site-wrapper").style.opacity = "1";
  popup.classList.remove("feedback_show");
});

openLogin.addEventListener("click", function() {
  hideLogin.classList.toggle("hide-login-show");
});
