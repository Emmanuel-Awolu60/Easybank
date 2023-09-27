let navMobile = document.querySelector(".mobile");
let navClose = document.querySelector(".close");
let hamburger = document.querySelector(".hamburger");
let firstSection = document.querySelector("first__section");
let body = document.getElementsByName("body");

function mobile() {
  hamburger.classList.toggle("close");
  navMobile.classList.toggle("showMobile");
}

body.addEventListener("click", function () {
  navMobile.classList.add("hidden");
  //   if (navMobile.classList !== "hidden") {
  //     navMobile.classList.add("hidden");
  //   } else {
  //     navMobile.classList.remove("hidden");
  //   }
});
