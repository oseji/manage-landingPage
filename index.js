"use strict";

const email = document.querySelector(".input-bar");
const go = document.querySelector(".btn-go");
const text = document.getElementById("hidden-email");
console.log(text);
const menuToggle = document.querySelector(".nav-hamburger");
const navList = document.querySelector(".nav-list");

//bottom form submission
go.addEventListener("click", function () {
  if (email.value.includes("@")) {
    console.log("Approved");
    email.value = "";
    text.classList.add("hidden");
  } else {
    text.classList.toggle("hidden");
  }
});

//nav-menu toggle
menuToggle.addEventListener("click", function () {
  navList.classList.toggle("hidden");
  console.log("clicked");
});
