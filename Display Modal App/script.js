"use strict";

//Declare all variables
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// loop through the modals
for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i]);
  showModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

//
const closeModals = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//close button && close overlay (a function called closeModal)
closeModal.addEventListener("click", closeModals);
overlay.addEventListener("click", closeModals);

//Use escape key to close modal
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModals();
});
