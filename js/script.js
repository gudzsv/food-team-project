/* Serhii Hudzenko */
/* #### Modal #### */
<<<<<<< Updated upstream
/* # 10.12.2023  # */

// Crete an object of HTML elements
=======
/* # 12.12.2023  # */

// Create an Object
>>>>>>> Stashed changes
const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

<<<<<<< Updated upstream
// Add Events Listener to the HTML elements
refs.openModalBtn.addEventListener("click", toogleModal);
refs.closeModalBtn.addEventListener("click", toogleModal);

// Create function to change/toogle "is-open" class on the backdrop element to open/close modal window
=======
// Add Listener to HTML elements(Tags)
refs.openModalBtn.addEventListener("click", toogleModal);
refs.closeModalBtn.addEventListener("click", toogleModal);

// Function to change/toogle class on backdrop
>>>>>>> Stashed changes
function toogleModal() {
  refs.backdrop.classList.toggle("is-open");
}
