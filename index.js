//Global Imports
import './toggleCart.js';
import './editCart.js'


import { fetchProducts } from './fetchProducts.js'
import { displayProducts } from './displayProducts.js';
import { setItemToLocalStorage } from './utils.js';


const newArrivalsSection = document.querySelector('.new-arrivals-grid');


const init = async() => {
    const products = await fetchProducts();
    localStorage.setItem('products', JSON.stringify(products));
   
    const newArrivals = products.filter((product) => product.newArrivals === true)
    displayProducts(newArrivals, newArrivalsSection)
}


init();

const shopBrandBtns = document.querySelectorAll('.brand-item-button');

shopBrandBtns.forEach((link) => {
    link.addEventListener('click', (e) => {
        const brand = e.target.getAttribute('data-id');
        setItemToLocalStorage('brand', brand)
    })
})