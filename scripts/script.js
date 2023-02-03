const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
}
