//Global Imports
import './toggleCart.js';
import './editCart.js';

import { hideLoader } from './loader.js';
import { displayProducts } from './displayProducts.js';
import { brandsFilter, setBrand } from './filters/brandsFilter.js';
import { searchFilter } from './filters/searchFilter.js';
import { highestToLowest, lowestToHighest, sortByLetter } from './filters/sort.js';

const loader = document.querySelector('.loader');
const filterProducts = document.querySelector('.filters-products-grid');
const brand = JSON.parse(localStorage.getItem('brand'));
const brandHeading = document.querySelector('.results-heading');


//Load Page
const init = async () => {
    const products = JSON.parse(localStorage.getItem('products'));
    
    if(brand){
        setBrand(products, brand)
        localStorage.removeItem('brand')
    } else {
        brandHeading.innerHTML = `Showing all results`;
        displayProducts(products, filterProducts);
    }

    hideLoader(); 
    
    //filters
    brandsFilter(products);
    searchFilter(products);

    
    //sorts 
    const lowHigh = document.getElementById('low-high');
    const highLow = document.getElementById('high-low');

    //Lowest to Highest
    lowHigh.addEventListener('click', () => {
        const lowToHigh = lowestToHighest(products);
        displayProducts(lowToHigh, filterProducts);
    })

    //Highest to Lowest
    highLow.addEventListener('click', () => {
        const highToLow = highestToLowest(products);
        console.log(highToLow)
        displayProducts(highToLow, filterProducts);
    })
 
}





init();

