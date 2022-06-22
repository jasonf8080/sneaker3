
export const displayProducts = (productsArray, section) => {

    const products = productsArray.map((product) => {
        const {image, title, price, id} = product;
        return `
        <div class="section-cover"></div>
        <a href="single-product.html" class="new-arrival-item" data-id="${id}">
            <img src="${image}" alt="">
            <p class="shoe-name">${title}</p>
            <p class="shoe-price">$${price}</p>
        </a>
        `
    }).join('');

    section.innerHTML = products;

    const sectionCover = document.querySelectorAll('.section-cover'); 
    setTimeout(()=> {
        sectionCover.forEach((cover) => cover.style.display = 'none')
    }, 200)
    //console.log(sectionCover)
    //sectionCover.remove();
 

  
    section.addEventListener('click', (e) => {
        const selectedID = e.target.closest('a').getAttribute('data-id');
        localStorage.setItem('selectedID', selectedID);
    })
}