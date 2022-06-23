import { displayProducts } from "../displayProducts.js";
import { filterMessage } from "./filterMessage.js";

const brandsList = document.querySelector('.brands-list');
const filterProducts = document.querySelector('.filters-products-grid');
const brandHeading = document.querySelector('.results-heading');

export const brandsFilter = (products) => {
    const brands = ['all',...new Set(products.map((product) => product.brand))];
    const brandItems = brands.map((brand) => {
        return `<p class="brand">${brand}</p>`
    }).join('');

    brandsList.innerHTML = brandItems;

    brandsList.addEventListener('click', (e) =>{
       if(e.target.classList.contains('brand')){
           const activeBrand = e.target.textContent;
           if(activeBrand === 'all'){
            filterMessage(brandHeading, `Showing all results`);
            displayProducts(products, filterProducts)
           } else {
            const newProducts = products.filter((product) => product.brand === activeBrand);
           filterMessage(brandHeading, `Showing all results for "${activeBrand}"`)
            displayProducts(newProducts, filterProducts)
        }
       }
    })
} 


export const setBrand = (products, brand) => {
    const brandProducts = products.filter((product) => product.brand === brand);
   filterMessage(brandHeading, `Showing all results for ${brand}`)
    displayProducts(brandProducts, filterProducts);
}

