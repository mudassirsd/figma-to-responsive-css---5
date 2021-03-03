const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', (e) => {
    mobileMenu.classList.remove('hide');
});

close.addEventListener('click', (e) => {
    mobileMenu.classList.add('hide')
});