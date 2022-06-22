////Navigation/////
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    if(window.pageYOffset > navHeight){
        nav.style.position = 'fixed';
    } else {
        nav.style.position = 'relative';
    }
})

//Toggle Links
const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.menu-links');

menuIcon.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
})
