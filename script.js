const navSlide = () => {
  const burger = document.querySelector(".burger");
  const parentNode = document.querySelector(".item-one").parentNode;
  const firstItem = document.querySelector(".item-one");
  const nav = document.querySelector(".burger-nav");
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  burger.addEventListener("click", () => {
    nav.classList.add("nav-in");
    link.classList.add("closeButton");
    listItem.appendChild(link);
    link.innerHTML = "X";
    parentNode.insertBefore(listItem, firstItem);
  });

  link.addEventListener("click", () => {
    parentNode.removeChild(listItem);
    nav.classList.remove("nav-in");
  });
};

navSlide();
