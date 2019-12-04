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

function aboutIn() {
  if (this.scrollY > this.innerHeight / 5) {
    document.body.classList.add("image-in", "para-in", "about-scroll");
  } else {
    document.body.classList.remove("image-in", "para-in", "about-scroll");
  }
}

window.addEventListener("scroll", aboutIn);

function projIn() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add(
      "proj-image-in",
      "proj-para-in",
      "project-scroll"
    );
  } else {
    document.body.classList.remove(
      "proj-image-in",
      "proj-para-in",
      "project-scroll"
    );
  }
}

window.addEventListener("scroll", projIn);

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const name = document.querySelector("#name");
const headline = document.querySelector(".headline");
const headlineTwo = document.querySelector(".headline2");
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
  .fromTo(headline, 1, { opacity: "0" }, { opacity: "1" })
  .fromTo(headlineTwo, 1, { opacity: "0" }, { opacity: "1" }, "-=1")
  .fromTo(
    slider,
    0.8,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(burger, 1, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=1")
  .fromTo(
    name,
    0.8,
    { opacity: "0", x: "-30" },
    { opacity: "1", x: "0", ease: Power2.easeInOut },
    "-=1"
  );
