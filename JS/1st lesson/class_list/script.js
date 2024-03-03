//classList - atribut pentru manipularea cu clasele din html cu ajutorul lui js
// const element = document.querySelector('#text__to-change')
// element.classList.add('new__class') //adauga clase noi la element
// element.classList.remove('new__class','a__doua-clasa');  //sterge clase din element
// const hasClass = element.classList.contains('new__class');  //returneaza raspuns boolean daca este prezenta o clasa
// element.classList.replace('new__class','replace'); //daca gaseste clasa transmisa o inlocuieste cu alta la dorinta
//element.classList.toggle('class__name)  //creaza si sterge clasa precum un intrerupator

// const btn = document.querySelector('#color__Button')
// const p = document.querySelector('#text__to-change')

// btn.addEventListener('click',()=>
// {
//     p.classList.toggle('red__text')
// })


//Burger menu
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu');

hamburger.addEventListener('click',()=>
{
    hamburger.classList.toggle('active');
    menu.classList.toString('active');
})