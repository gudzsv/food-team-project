const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toogleModal);
refs.closeModalBtn.addEventListener('click', toogleModal);

refs.openModalBtn.addEventListener('click', toogleModal);
refs.closeModalBtn.addEventListener('click', toogleModal);

function toogleModal() {
  refs.backdrop.classList.toggle('is-open');
}
