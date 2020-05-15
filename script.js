const navSlide = () => {
  const burger = document.querySelector("button");
  const nav = document.querySelector(".burger-nav");
  const closeButton = document.querySelector(".close");

  burger.addEventListener("click", () => {
    nav.classList.add("nav-in");
  });

  closeButton.addEventListener("click", () => {
    nav.classList.remove("nav-in");
  });
};

navSlide();
