import './toggleCart.js';
import './editCart.js';

import { hideLoader } from './loader.js';
import { activeCart } from './toggleCart.js';
import { addToCart } from './editCart.js';

import { sizeElements } from './utils.js';

const selectedID = localStorage.getItem('selectedID');
const products = JSON.parse(localStorage.getItem('products'));

const sizesContainer = document.querySelector('.sizes-container');
const productImg = document.querySelector('.single-product-img');
const productName = document.querySelector('.single-product-name');
const productBrand = document.querySelector('.single-product-brand');
const pageInfo = document.querySelector('.page-info span');

let singleProduct = products.find((product) => product.id == selectedID); 
let newProduct;
//let cartIndex;

//Load Page
window.addEventListener('DOMContentLoaded', () => {
    document.title = singleProduct.title;
    pageInfo.textContent = singleProduct.title;

   sizesContainer.innerHTML = sizeElements;
   
    productImg.src = singleProduct.image;
    productName.textContent = singleProduct.title;
    productBrand.textContent = singleProduct.brand;

    hideLoader();
});


//Select a Size
sizesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('size')){
        const sizes = document.querySelectorAll('.size');
        sizes.forEach((size) => {
            size.classList.remove('active');
        })
        
        const activeSize = e.target;
        activeSize.classList.add('active');
        const size = activeSize.textContent;
       
         newProduct = {singleProduct, size: `${size}`, quantity: 1};
    }
})

//Add Item to Cart
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {  
    if(newProduct){
        addToCart(newProduct);
        console.log('adf')
    } else {
       const sizeMessage = document.querySelector('.size-message');
       sizeMessage.style.visibility = 'visible';

       setTimeout(() => {
        sizeMessage.style.visibility = 'hidden';
       }, 2500)
    }
})





