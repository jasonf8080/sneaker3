const cartIcon = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const cartCover = document.querySelector('.cart-cover');
const exitCartBtn = document.querySelector('.cart-exit-btn');

cartIcon.addEventListener('click', () => {
   activeCart();
})

exitCartBtn.addEventListener('click', () => {
   cart.classList.remove('active');
   cartCover.classList.remove('active');
})



export const activeCart = () => {
   cartCover.classList.add('active');
   cart.classList.add('active');
}

