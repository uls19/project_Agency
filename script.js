const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.nav__menu');
burgerEl.addEventListener("click", function() {
  menuEl.classList.toggle('nav__menu-hidden');  
} );
