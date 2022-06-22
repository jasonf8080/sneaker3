import { displayProducts } from "../displayProducts.js";

const search = document.querySelector('.search-filter');
const filterProducts = document.querySelector('.filters-products-grid');


export const searchFilter = (products) => {
    search.addEventListener('keyup', (e) => {
       const inputValue = e.target.value;
       
       if(inputValue){
            const newProducts = products.filter((product) => product.title.toLowerCase().startsWith(inputValue));
            displayProducts(newProducts, filterProducts);
       } else {
            displayProducts(products, filterProducts)
       }

       //if no results
       
    })
}