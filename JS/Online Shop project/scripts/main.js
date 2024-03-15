import sneakers from './products.json' assert {type: 'json'};
let productContainer = document.querySelector('.product-container');

function createShop()
{
    sneakers.forEach((shoes)=>
    {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =`
        <img src="${shoes.img}" alt="${shoes.name}">
        <h3>${shoes.name}</h3>
        <p>${shoes.category}</p> `;
    
        let priceBlock = document.createElement('div');
        priceBlock.classList.add('price-block');
        priceBlock.innerHTML = `
        <span class="price">$${shoes.price}</span>
        <button class="add-to__cart">Add to Cart</button>`;
        
        productCard.appendChild(priceBlock);
        productContainer.appendChild(productCard);
    })

}
createShop();
let totalProductsParagraph = document.querySelector('.total-products');
totalProductsParagraph.textContent = `${sneakers.length} Products`;