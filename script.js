const burger = document.querySelector("button");
const nav = document.querySelector("div .burger-nav");
const closeButton = document.querySelector(".close");

var slide = function () {
  nav.classList.add("nav-in");
};

burger.addEventListener("click", slide());

var close = function () {
  nav.classList.remove("nav-in");
};

closeButton.addEventListener("click", close());
