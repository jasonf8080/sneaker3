import { displayProducts } from "../displayProducts.js";
import { filterMessage } from "./filterMessage.js";

const search = document.querySelector('.search-filter');
const filterProducts = document.querySelector('.filters-products-grid');
const brandHeading = document.querySelector('.results-heading');


export const searchFilter = (products) => {
    search.addEventListener('keyup', (e) => {
       const inputValue = e.target.value.toLowerCase();
       
       if(inputValue){
            const newProducts = products.filter((product) => product.title.toLowerCase().startsWith(inputValue));
            displayProducts(newProducts, filterProducts);
            filterMessage(brandHeading, `Showing all results for "${inputValue}"`);
            if(newProducts.length < 1){
               filterMessage(brandHeading, `Sorry no results matched your search`);
            }
       } else {
          filterMessage(brandHeading, `Showing all results`);
            displayProducts(products, filterProducts)
       }

       //if no results
       
    })
}