/* Serhii Hudzenko */
/* #### Modal #### */
/* # 10.12.2023  # */

// Crete an object of HTML elements
const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

// Add Events Listener to the HTML elements
refs.openModalBtn.addEventListener("click", toogleModal);
refs.closeModalBtn.addEventListener("click", toogleModal);

// Create function to change/toogle "is-open" class on the backdrop element to open/close modal window
function toogleModal() {
  refs.backdrop.classList.toggle("is-open");
}
