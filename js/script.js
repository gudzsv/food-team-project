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

const subscribeForm = document.querySelector('.mail-form');
const modalForm = document.querySelector('.modal-form');

function formInfo(event) {
  event.preventDefault();
  if (event.target.elements.email) {
    //subscribe
    console.log('User email:', event.target.elements.email.value);
    event.target.reset();
  } else {
    //modal
    console.log('User name:', event.target.elements.user_name.value);
    console.log('User phone:', event.target.elements.user_phone.value);
    console.log('User email:', event.target.elements.user_email.value);
    event.target.reset();
  }
}

subscribeForm.addEventListener('submit', formInfo);
modalForm.addEventListener('submit', formInfo);

// Mobile-menu Nelli Diachkina //
const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-menu');
burgerBtn.addEventListener('click', () => toggleMenu(mobileNav));
mobileNav.addEventListener('click', handleModalButtonClick);
function toggleMenu(element) {
  element.classList.toggle('is-open');
}
function handleModalButtonClick(e) {
  const target = e.target.closest('.modal-btn');
  if (!target) return;

  const modal = e.currentTarget;
  toggleMenu(modal);
}
