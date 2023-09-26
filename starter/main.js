let navMobile = document.querySelector(".mobile");
let navClose = document.querySelector(".close");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hidden");
  navClose.classList.remove("hidden");
  navMobile.classList.add("showMobile");
});
// function dosomething() {}
navClose.addEventListener("click", function () {
  hamburger.classList.remove("hidden");
  navClose.classList.add("hidden");
  navMobile.classList.rem("navMobile");
});
