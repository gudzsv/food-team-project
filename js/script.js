const refs = {
  openModalHeaderBtn: document.querySelector('[data-open-order-header]'),
  openModalHeroBtn: document.querySelector('[data-open-order-hero]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalHeaderBtn.addEventListener('click', toogleModal);
refs.openModalHeroBtn.addEventListener('click', toogleModal);
refs.closeModalBtn.addEventListener('click', toogleModal);

function toogleModal() {
  refs.backdrop.classList.toggle('is-open');
}
