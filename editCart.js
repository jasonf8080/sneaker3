//Actions in this cart can be done from any page, thats why we make an external file we can export
import { getItemFromLocalStorage } from "./utils.js";
import { setItemToLocalStorage } from "./utils.js";
import { activeCart } from "./toggleCart.js"
import {formatPrice } from "./formatPrice.js"

let cart = getItemFromLocalStorage('cart');
const cartEl = document.querySelector('.cart');


export const addCartToDOM = (id, image, title, size, quantity, price) => {
    const newPrice = formatPrice(price, quantity);
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const cartItemEl = document.createElement('div');

    cartItemEl.classList.add('cart-item');
    cartItemEl.setAttribute('data-id', id);
    cartItemEl.innerHTML = `
            <div class="cart-item-img-container"><img class="cart-item-img" src="${image}" alt=""></div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${title}</h4>
                <p class="cart-item-size">${size}</p>
                <div class="quantity-div">
                    <i class="fa-solid fa-minus"></i>
                    <span class="quantity">${quantity}</span>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <p class="cart-item-price">$${newPrice}</p>
            </div>
        <i class="fas fa-times"></i>
    `;
 
    console.log(cartItemEl)
    cartItemsContainer.appendChild(cartItemEl);
    console.log()
 
 }

export const addToCart = (product) => {
    cart = [...cart, product];

    const {singleProduct:{id, image, title, price}, quantity, size} = product;
    addCartToDOM(id, image, title, size, quantity, price);
    
    //update price;
    updatePrice();
    //set cart to localstorage
    setItemToLocalStorage('cart', cart);
    activeCart();
}


const totalAmount = document.querySelector('.total-amount');
function updatePrice(){
    const newPrice = cart.reduce((total, cartItem) => {
        return total += cartItem.quantity * cartItem.singleProduct.price;
    }, 0)

    totalAmount.textContent = `$${newPrice}`;
}



const updateCartItems = () => {
    cart.forEach((cartItem) => {
        const {singleProduct:{id, image, title, price}, quantity, size} = cartItem;
        addCartToDOM(id, image, title, size, quantity, price);
    })
}



const saveCart = () => {
    updateCartItems();
    updatePrice();
}

const removeItem = (id) => {
    cart = cart.filter((cartItem) => cartItem.singleProduct.id !== id);
}


cartEl.addEventListener('click', (e) => {
    //Delete item from cart
   if(e.target.classList.contains('fa-times')){
        const cartItem = e.target.parentElement;
        const cartItemID = cartItem.getAttribute('data-id');
        removeItem(cartItemID);
        cartItem.remove();
    
   }


   //Update quantity of item
   if(e.target.classList.contains('fa-plus')){
       const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
       const quantityEl = e.target.previousElementSibling;
       const priceEl = e.target.parentElement.nextElementSibling;

       const increaseItem = cart.find((cartItem) => cartItem.singleProduct.id === id);
       
       increaseItem.quantity++;
        const newPrice = formatPrice(increaseItem.singleProduct.price, increaseItem.quantity);
      
       priceEl.textContent = `$${newPrice}`
       quantityEl.textContent = increaseItem.quantity.toString();
   }


   if(e.target.classList.contains('fa-minus')){
        const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        const quantityEl = e.target.nextElementSibling;
        const priceEl = e.target.parentElement.nextElementSibling;
       
        const itemEl = e.target.parentElement.parentElement.parentElement; //remove from DOM

        const increaseItem = cart.find((cartItem) => cartItem.singleProduct.id === id);
        increaseItem.quantity--;
        
        if(increaseItem.quantity === 0){
            removeItem(id);
            itemEl.remove();
        }

        const newPrice = formatPrice(increaseItem.singleProduct.price, increaseItem.quantity);

        priceEl.textContent = `$${newPrice}`;
        quantityEl.textContent = increaseItem.quantity.toString();
        
}

    updatePrice();
    setItemToLocalStorage('cart', cart);
   
})


saveCart();



