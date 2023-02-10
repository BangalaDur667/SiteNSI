const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");
const screenDiv = document.getElementById("f-div");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
}

if (window.screen.width >= 1800) {
  screenDiv.classList.replace(
    "full-page-div-smallscreen",
    "full-page-div-bigscreen"
  );
}

const slidesPos = document.querySelector(".slides");
const leftChevron = document.getElementById("left-chevron");
const rightChevron = document.getElementById("right-chevron");
const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
var slideNumber = 0;

function checkSlide(page) {
  if (page == 0) {
    slidesPos.classList.toggle("pos1");
  }
  if (page == 1) {
    slidesPos.classList.toggle("pos2");
    left.classList.toggle("usable");
  }
  if (page == 2) {
    slidesPos.classList.toggle("pos3");
    left.classList.toggle("usable");
  }
  if (page == 3) {
    slidesPos.classList.toggle("pos4");
    left.classList.toggle("usable");
  }
  if (page == 4) {
    slidesPos.classList.toggle("pos5");
    left.classList.toggle("usable");
  }
  if (page == 5) {
    slidesPos.classList.toggle("pos6");
    left.classList.toggle("usable");
  }
  if (page == 6) {
    slidesPos.classList.toggle("pos7");
    left.classList.toggle("usable");
    right.classList.toggle("limit");
  }
}

function leftPress() {
  if (slideNumber == 0) {
    slideNumber = 0;
    console.log(slideNumber);
  } else {
    checkSlide(slideNumber);
    slideNumber--;
    console.log(slideNumber);
    checkSlide(slideNumber);
  }
}

function rightPress() {
  if (slideNumber == 6) {
    slideNumber = 6;
    console.log(slideNumber);
  } else {
    checkSlide(slideNumber);
    slideNumber++;
    checkSlide(slideNumber);
  }
}
leftChevron.addEventListener("click", leftPress);
rightChevron.addEventListener("click", rightPress);

