const button = document.querySelector(".js-button");
const menu = document.querySelector(".js-menu");
const close = document.querySelector(".js-hamburger");

const openMenu = function () {
  if (!menu.classList.contains("nav__active")) {
    menu.classList.add("nav__active");
    close.src = "images/icon-close.svg";
  } else {
    menu.classList.remove("nav__active");
    close.src = "images/icon-hamburger.svg";
  }
};

button.addEventListener("click", openMenu);
