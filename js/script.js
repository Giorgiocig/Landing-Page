"use strict";

const nav = document.querySelector(".main-nav");
const button = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");

button.addEventListener("click", function () {
  nav.classList.toggle("is-open");
  hamburgerIcon.classList.toggle("is-open");
});
