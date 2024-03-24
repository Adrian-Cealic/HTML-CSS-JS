import cars from "./cars.json" assert {type: "json"};

const carsListElement = document.getElementById("cars-list");
const searchedCarsElement = document.getElementById("searched-cars");
let searchInput = document.querySelector('#search-input')

// function populateCarsList(carsArray, element) {
//     element.innerHTML = "";
//     carsArray.forEach(car => {
//         const listElement = document.createElement("li");
//         listElement.textContent = car; 
//         element.appendChild(listElement);
//     });
// }

function findCar()
{
    const searchText = searchInput.value.trim().toLowerCase();
    searchedCarsElement.innerHTML = "";
    let found = false;

    cars.forEach(car=>
        {
            if(JSON.stringify(car).toLowerCase().includes(searchText))
            {
                const listElement = document.createElement("div");
                listElement.classList.add("cards");
                listElement.textContent = car;
                searchedCarsElement.appendChild(listElement);
                found = true;
            }
        }
    );
    searchedCarsElement.style.display = found ? "block" : "none";

};
// populateCarsList(cars, carsListElement)
// findCar("")
searchInput.addEventListener('input',findCar);



