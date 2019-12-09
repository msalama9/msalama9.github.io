const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
};

navSlide();

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const name = document.querySelector("#name");
const title = document.querySelector(".title");
const burger = document.querySelector(".burger");
const about = document.querySelector(".hero-about");

const tl = new TimelineMax();

tl.fromTo(
  hero,
  0.8,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
)
  .fromTo(
    hero,
    0.8,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(title, 1, { opacity: "0" }, { opacity: "1" })
  .fromTo(
    slider,
    0.8,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.3"
  )
  .fromTo(
    burger,
    0.8,
    { opacity: "0", x: "30" },
    { opacity: "1", x: "0" },
    "-=1"
  )
  .fromTo(
    name,
    0.5,
    { opacity: "0", x: "-30" },
    { opacity: "1", x: "0", ease: Power2.easeInOut },
    "-=1"
  );
