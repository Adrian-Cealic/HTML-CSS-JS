const cars = ["Toyota","Nissan","Ferrari","Dacia"];

let container = document.querySelector('.container');
function showArrayInDoom(arr)
{
    let html = "<ul class='cars'>";
    for (let i = 0; i < arr.length; i++) {
        html+=` <li class='car_item'>${arr[i]}</li>`;
    }
    return html+='</ul>';
}

container.innerHTML = showArrayInDoom(cars);

//1) verifica daca stringul introdus de utilizator este un palindrom.Arata rez in dom
//1) Calculeaza media unui array. arata rez in doom
//3) creaza o functie conditie(de exemplu daca un numar este par),Aplica in functia de filtrare a unui array.

// let containerSecond = document.querySelector('.containerSecond');
// let date = prompt("Introdu un string de date pentru a verifica daca acesta e palindrom");
// function palindrom(text)
// {
//     let pal="";
//     for (let i = text.length-1; i >=0; i--) {
//         pal+=text[i];    
//     }
//     if(pal==text) return "Textul e palindorom";
//     else return "textul nu e palindrom";
// }
// containerSecond.innerHTML+=`${date}=>`+palindrom(date);

//----2)
// let container3 = document.querySelector('.container3');
// const arr = [1,2,3,4,5,5];
// let media = 0;
// function med(table)
// {
//     for (const iterator of table) {
//         media+=iterator;
//     }
//     return media/table.length;
// }
// container3.innerHTML+=`Media = `+med(arr);