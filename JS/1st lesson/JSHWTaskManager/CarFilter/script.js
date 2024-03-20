import cars from "./cars.json" assert {type: "json"};
const carsListElement = document.getElementById("cars-list");
const searchedCarsElement = document.getElementById("searched-cars");

function populateCarsList(carsArray, element) {
    element.innerHTML = "";
    carsArray.forEach(car => {
        const listElement = document.createElement("li");
        listElement.textContent = car; 
        element.appendChild(listElement);
    });
}

let searchInput = document.querySelector('#search-input')
searchInput.addEventListener('input',findCar);
function findCar(text)
{
    const carsArray = [];
    for(const car in cars)
    {
        carsArray.push(cars[car]);
    }
    searchedCarsElement.innerHTML = "";
    let found = false;
    carsArray.forEach(car=>
        {
            if(car.toLowerCase().includes(text.toLowerCase))
            {
                const listElement = document.createElement("li");
                listElement.textContent = car;
                searchedCarsElement.appendChild(listElement);
                found = true;
            }
            else
            {
                 found = false;
            }
        }
    );
    searchedCarsElement.style.display = found ? "block" : "none";

};
populateCarsList(cars, carsListElement)
findCar("")



