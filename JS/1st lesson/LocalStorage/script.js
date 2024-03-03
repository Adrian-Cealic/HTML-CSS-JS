// LOCAL STORAGE -> depoatiyl local a unui browser care poate salva valori sub forma de chei-valori cu tipul de date string
// console.log(localStorage);

// localStorage.setItem("number",73); //metoda pentru setarea elemntului inatuntrul la storage cu o oarecare key si value;
// const number = localStorage.getItem('number'); //metoda care permite sa accesezi valoarea din depozitul local dupa cheie
// console.log(number); 

// localStorage.setItem("array",[1,2,3,4,5]);  
// localStorage.removeItem('array');
// localStorage.removeItem('number');

// const user = {name:"Mario",age :34};
// const jsonUser = JSON.stringify(user);
// localStorage.setItem('user',jsonUser);

// const objectUser = JSON.parse(localStorage.getItem('user'));

// console.log(objectUser);

// localStorage.length //cate elemente se salveaza in storage
// localStorage.key(i) //pentru a scoate keya respectiva introdusa
// localStorage.clear() //curata tot local storage


// //------------SALVAM MESAJELE DE UTILIZATOR--------------
// const messgaeInput = document.querySelector('#message_input');
// const output = document.querySelector("#output");
// const btn1 = document.querySelector(".save-message");
// function saveMessage()
// {
//     let count = localStorage.getItem('index');
//     const message = messgaeInput.value;
//     count++;
//     let index = count;
//     localStorage.setItem(`savedMessage${count}`,message);
//     messgaeInput.value = "";
//     localStorage.setItem('index',count);
//     outputMessage();
// }

// localStorage.clear();

// function outputMessage()
// {
//     const savedMessage = localStorage.getItem(`savedMessage${count}`);
    
//     let p = document.createElement('p');
//     p.textContent = savedMessage;
//     output.appendChild(p);
// }

// btn1.addEventListener('click',saveMessage);

// messgaeInput.addEventListener('keydown',(e)=>
// {
//     if(e.key == "Enter")
//     {
//         saveMessage();
//     }
// })

// addEventListener('DOMContentLoaded',localStorage.clear());

// ----------MOVIE SELECTOR-----------
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.ocupied)');
const count = document.querySelector('#count');
const totalPrice = document.querySelector('#total-price');
const movieSelect = document.querySelector('#movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice);

function setMovie(idx,price)
{
    localStorage.setItem('selectedMovieIdx',idx);
    localStorage.setItem('selectedMoviePrice',price);
}
container.addEventListener('click',(e)=>
{
   if(e.target.classList.contains('seat') && !e.target.classList.contains('ocupied'))
   {
    e.target.classList.toggle('selected');
   }
   selectedSeatsChecker();
})
selectedSeatsChecker();

movieSelect.addEventListener('change',(e)=>
{
    ticketPrice = +(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    setMovie(selectedIndex,ticketPrice);
    // setMovie()
})
// localStorage.clear();

function selectedSeatsChecker()
{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map((seat)=>[...seats].indexOf(seat));
    console.log(seatsIndex);

}