const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");
const screenDiv = document.getElementById("f-div");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
}

alert("La livraison est offerte jusqu'au 21 février")

let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
togg1.addEventListener("click", () => {
  console.log("hi")
  if (d1.style.display == "block") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})
