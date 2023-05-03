const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.header-nav');
burgerEl.addEventListener("click", function() {
  menuEl.classList.toggle('header-nav_hidden');  
} );

