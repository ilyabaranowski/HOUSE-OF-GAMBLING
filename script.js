//Burger menu appears on click
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navigation__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((nav) =>
  nav.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

//Text changing on button language

const changeLang = document.querySelector(".globe-txt");

changeLang.addEventListener("click", () => {
  changeLang.innerHTML = "RU";
});
