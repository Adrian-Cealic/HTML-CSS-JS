import sneakers from './products.json' assert {type: 'json'};
let productContainer = document.querySelector('.product-container');

function createShop()
{
    sneakers.forEach((shoes)=>
    {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =`
        <img src=${shoes.favouriteIMG} alt="heart" class="favourite-img">
        <img src="${shoes.img}" alt="${shoes.name}">
        <h3>${shoes.name}</h3>
        <p>${shoes.category}</p> `;
    
        let priceBlock = document.createElement('div');
        priceBlock.classList.add('price-block');
        priceBlock.innerHTML = `
        <span class="price">$${shoes.price}</span>
        <button class="add-to__cart">Add to Cart</button>
        `;

        productCard.querySelector('.favourite-img').addEventListener('click',()=>
        {
            productCard.innerHTML =`
            <img src=${shoes.noFavouriteIMG} alt="heart" class="favourite-img">
            <img src="${shoes.img}" alt="${shoes.name}">
            <h3>${shoes.name}</h3>
            <p>${shoes.category}</p> `;
    
        });
        

        priceBlock.querySelector(".add-to__cart").addEventListener('click',()=>
        {
            addToCart(shoes.id);
        });
        
        productCard.appendChild(priceBlock);
        productContainer.appendChild(productCard);
    })

}
createShop();
let totalProductsParagraph = document.querySelector('.total-products');
totalProductsParagraph.textContent = `${sneakers.length} Products`;

let cart =JSON.parse(localStorage.getItem('cart')) || [];
//setam array curat initial caci nu trebuie sa avem valoare null,noi o sa salvam elementele in array,si array-ul in local storage
let addToCart = (id) =>
{
   let search = cart.find((cartItem)=>cartItem.id === id);
   if(search === undefined) //deoarece find() returneaza undefined sau number
   {
        cart.push({
            id: id,
            qty :1
        })
   }else{
    search.qty +=1;
   }
   localStorage.setItem('cart',JSON.stringify(cart));
}


