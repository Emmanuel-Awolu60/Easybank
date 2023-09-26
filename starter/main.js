let navMobile = document.querySelector(".mobile");
let navclose = document.querySelector(".close");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hidden");
  navclose.classList.remove("hidden");
  navMobile.classList.add("showMobile");
});
// function dosomething() {}
