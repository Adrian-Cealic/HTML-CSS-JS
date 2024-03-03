// // console.log("Hello world");

// // //tipuri de date
// // /*
// // Number->toate numerele posibile
// // Undefined -> nedefinit (fara tip de date)
// // null -> zero,un rezultat definit
// // String -> sir de caractere
// // boolean -> da sau nu
// // NaN -> (not a number)
// // Object -> obiecte
// // */
// // //variabile
// // //let,var,const

// // let number = 12;
// // let isAlive = true;
// // let nothing;
// // let trash = null;
// // let name = "JavaScript";

// // console.log(typeof number,number);
// // console.log(typeof name,name);
// // console.log(typeof isAlive,isAlive);
// // console.log(typeof nothing,nothing);
// // console.log(typeof trash,trash);

// // const age = 34;
// // const isMarried = false;
// // //const nothinggg; nu exista undifined constanta
// // const zero = null;
// // const food = "pui";

// // console.log(typeof age,age);
// // //console.log(typeof nothinggg,nothinggg);
// // console.log(typeof isMarried,isMarried);
// // console.log(typeof zero,zero);
// // console.log(typeof food,food);


// //operatori matematici
// // let a=10;
// // let b=20;

// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log(a%b);
// // console.log(a++);
// // console.log(--b);
// // console.log(a--);
// // console.log(--b);

// let number=-3.14;

// let absValue = Math.abs(number);
// console.log(absValue);

// let floorValue = Math.floor(number);
// console.log(floorValue);

// let roundValue = Math.round(number);
// console.log(roundValue);

// let maxValue = Math.max(number);
// console.log(maxValue);

// let minValue = Math.min(number);
// console.log(minValue);

// let randomValue = Math.floor(Math.random()*10)+5;
// console.log(randomValue);

//operatori logici
//la fel ca in c++

//===

// console.log(3==='3'); -comparare dupa valori si tip de date
// console.log(3=='3');  - compare dupa valori

//template string

// let person = "Timur"
// let aeg = 12;
// let greeting = `Salut ${person}. Tu ai ${aeg}`;
// console.log(greeting);

//alert,prompt,confirm
//1)
//alert("salut") //functia pentru a arata ceva la ecran prin geam de dialog
// let userValue = prompt("Introduce mumarul cardului","+373000-0000",); functia pentru a lua de la utilizator date

//2)
// alert(userValue)

//3)
// let userValue=confirm(); functia accepta da sau nu si returneaza o valoare boolean
// alert(userValue)

//exemple
// let username = prompt("Put your username: ","Guest");
// alert(username)
// if(username!=null)
// {
//    alert(`Salut ${username}`);
// }
// else
// {
//     alert(`Nume introdus gresit`);
// }

//2)
// let choice = confirm("da sau nu?");
// if(choice)
// {
//     alert("Esti loh");
// }
// else
// {
//     alert("Nu esti loh")
// }

//3) //operator '+' converteste din string in int
// let number1 = +prompt("Put first number");
// let number2 = prompt("Put second number");

// number2 = parseInt(number2);

// alert(number1 + number2);

// if(isNaN(number1) && isNaN(number2))
// {
//     alert("unul dintre operanzi nu este numar");
// }
// else
// {
//     let result = number1 + number2;
//     alert(result);
// }

// switch (key)
// {
//     case value : 

//     break;

//     default :
//     break;
// }

// Propuneti utilizatorului sa calculeze aria pentru una dintre 3 figuri geometrice la alegerea lui : cerc,dreputinghi,triunghi.
// in dependenta de figura aleasa cereti valorile necesare pentru a calcula aria

// let figura = prompt("cerc,dreptunghi,triunghi");

// switch(figura)
// {
//     case "cerc" : 
//     {
//         const pi = 3.14;
//         let raza = +prompt("Introdu raza : ");
//         let ariaCerc = pi*raza*raza;

//         console.log(`Arian Cercului este : ${ariaCerc}`);

//         break;
//     }
//     case  "dreptunghi" : 
//     {
//         let L = +prompt("Introdu latura mare:");
//         let l = +prompt("Introdu latura mica:");
//         let ariaDreptunghi = L*L;
//         console.log(`Aria triunghiului este : ${ariaDreptunghi}`);

//         break;
//     }
//     case "triunghi":
//         {
//             let a = +prompt("Introdu latura 1 :");
//             let b = +prompt("Introdu latura 2 :");
//             let c = +prompt("Introdu latura 3 :");

//             let ariaTriunghi = (a+b+c)/2;

//             console.log(`Aria triiunghiului este : ${ariaTriunghi}`);
            
//             break;
//         }
// }

//String
// let username = "adrian";
// // console.log(username.length); lungimea 

// for (let i = 0; i < username.length; i++) {
//   console.log(username[i]);
    
// }

// Medode
// let text = "C plus plus";
// text[0]="p";
// text = text.toUpperCase(text); convert to upper case
// text = text.toLowerCase(text); convert to lower case
// let slice = yexy.charAt(0); returneaza caracterul care se fla pe indecele cautat
// let slice = text.charAt(4);
// let slice = text.indexOf("us"); returneaza primul indice intalnit a substringului cautat 
// let answe = text.includes("plus") returneaza true daca substringul cautat se regfaseste in string
// let substring = text.substring(2,6) returneaza substringul din stringul initial de pe pozitiile dorite
// let words = text.split(" "); returneaza un array pe baza la stringul initial cu delimitari
//console.log(text.trim()); taie spatiile care sunt in surplus

// let text = "Adrian are mere";
// console.log(text.trim());

// //Gaseste cel mai lung cuvant din string
// let text = "JS is a front end language";
// let words = text.split(" "); //taiem totul dupa spacebar
// let longestWord = words[0];
// console.log(words);

// for (let i = 0; i < words.length; i++) {
//     if(words[i].length > longestWord.length)
//     {
//         longestWord = words[i];
//     }
    
// }
// console.log(longestWord);
// //Reverse a string
// const text = prompt("Introdu un cuvant");
// let newText = "";

// for (let i = text.length - 1; i >= 0; i--) {
//     newText += text[i];
// }

// console.log(newText);

//1) propuneti utilizatorului sa introduca un text,calculati cate vocale si consoane sunt in textul utilizatoului
// let text = prompt("Introdu un text :");
// let vocale = "aeiouAEIOU";
// let countVowel = 0;
// let countConsonat = 0;

// for (let i = 0; i < text.length; i++) {
//     if(vocale.includes(text[i]))
//     {
//         countVowel++;
//     }
//     else
//     {
//         countConsonat++;
//     }
    
// }

// console.log(`Vocale din textul : ${text} sunt : ${countVowel}`);
// console.log(`Consoane din textul : ${text} sunt : ${countConsonat}`);

//2)propuneti utilizatorului sa introduca un text. transcrieti in uppercase inceputul fiecare cuvant nou
// let text = prompt("Introdu textul");
// const words = text.split(" ");
// let result = "";

// for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     result += word[0].toUpperCase()+word.substring(1)+" ";
    
// }
// console.log(result);

//3)3) Propuneti utilizatorului sa introduca un text si un caracter.Socoate de cate ori apare caracterul
// let text = prompt("Introdu textul:");
// const char = "a";
// let count = 0;
// for (let i = 0; i < text.length; i++) {
//     if(text[i]==char)
//     {
//        count++;
//     }
    
// } 
// console.log(`Caracterul apare de ${count} ori`);

//Array
//mutable & organizat hybrid
//crearea array ului
//1)
//2)

// // const grades = new Array(7,8,9);
// console.log(numbers);
// console.log(grades);
// console.log(numbers.length); lungimea array ului

//lucrul :
//chiar daca elemntele array este initializat ca o constanta,
//noi putem moficia elemnetele dale, pe cand sa reatribuim valori ramane imposibil

// const numbers = [1,2,3,4,5];
// numbers[2]=100;
// console.log(numbers[1]);
// numbers = [1,4,2,5,] //eror

//metode
// const numbers = [1,2,3,4,5];
// const numbers2 = [10,20,30,40,50];
// const numbers3 = ["a","b","c"];
// numbers = numbers.push(100); //adauga elemnt la sfarstitul array ului
// numbers.pop(); sterge ultimul element
// numbers.unshift(2);adauga elemnt la inceputul array ului
// numbers.shift() sterge primul element
// const arr3 = numbers+numbers2  concatineaza intr-un string
// const arr3 = numbers.concat(numbers2,numbers3); returneaza un array nou combinand elemnetele din arrayuirle transime
// const slice = numbers.slice(2,4); //returneaza taietura indicata dupa indice
// const index = numbers.indexOf(3,1) Cauta 3 de la indicile 1
// numbers.reverse() imverseaza arrayurile 
//const response = numbers.includes(20); //returneaza true sau false daca elementul cautat exista in array

// for (let i = 0; i < numbers.length; i++) {
//     console.log(i,numbers[i]);
    
// }
//for of -> ciclu care itereaza direct prin elementele colectiei cu ajutorul iteratorului
//iterator -> obiect care executa iteratiile si salveaza elementele in sine;
//folositi for cand avem nevoie de indece,folositi for of cand aveti nevoie doar de elemnte din array
// for (const iterator of numbers) {
//     console.log(iterator);
// }

//exercitii

//cautati elementele unice dintr-un array;
// const numbers = [1,2,2,3,3,4,4,5];
// const uniqueNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if(!uniqueNumbers.includes(numbers[i]))
//     {
//         uniqueNumbers.push(numbers[i]);
//     }
// }

// console.log(uniqueNumbers);

//2) filtreaza cuvintele din array care au mai mult de 5 simboluri
// const response = +prompt("Introdu limita de simboluri pentru cuvant :");
// const words = ["js","python","abracadabra","urascuniversitatea"];
// const newWords = [];
// for (const word of words) {
//     if(word.length>response)
//     {
//         newWords.push(word);
//     }
// }
// console.log(newWords);

//Exercitii:
//1)Aveti array de cuvinte,concatinati toate elentele intr-un text
//2)Gasiti indexul elemntului cerut de utilizator fara a folosi index of
//3)Gasiti toate indecele elemtului ceru de utilizator si salvatile in array
//4)Reversati un array fara a folosi reverse() si fara ciclul care merge de la ultimul elemnent spre primul

//1)
// const words = ["adrian","UTM","Universitate"];
// let sentece = "";
// for (const word of words) {
//     sentece+=word;
// }
// console.log(sentece);

//2)
// const array = [1,2,3,4,5,6,7,8];
// let index = +prompt("Introdu indexul elemntului cautat");
// for (let i = 0; i < array.length; i++) {
//     if(i==index)
//     {
//         console.log(`Elementul cerut cu indexul ${index} este ${array[i]}`);
//     }
    
// }

//3)
// let number = +prompt("Introdu elementul");
// const arr = [1,2,2,3,4,5,6,7,7,8,8];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==number)
//     {
//         arr2.push(i);
//     }
    
// }
// console.log(arr2);

//4)
// const numbers = [1,2,3,4,5];
// const reversed = [];

// for (const number of numbers) {
//     reversed.unshift(number);
// }
// console.log(reversed);



//------------------------------------------------------------

//----------DOM------------
//DOM - UL este un document object model . familia intregilor tuturor elemetnelor care sunt accesate cu ajutorul obictului Document din JS.
//fieacre element selectat se interpreteaza ca un obiect.

// const headingText = document.getElementsByClassName('main_text');
// console.log(headingText);  salvarea in variabila

// const headingText = document.getElementsByClassName('main_text');//returneaza obiect cu elemente
// const p = document.getElementById('subtext'); //returneazs un singur element

// console.log(p);

// ------------------FUNCTII--------------------
// function greet(name)
// {
//     console.log(`salut ${name}`);
// }

// function sum(a,b)
// {
//     return a+b;
// }
// greet("Valentin");
// //salvam rezultatul exectuarii
// let rez = sum(2,3);
// console.log(rez);
// //aratam rezultatul
// console.log(sum(2,3));

//-----------------functia anonima(nu are nume)

// const multiply = function(x){console.log(x);};
// multiply(3); 
// console.log(typeof multiply);  //functia este un tip de date

//-------------------arrow function---------------- CEA MAI FOLOSITA
// const Hello = (x,y) => {console.log(x+y);}
// Hello(10,20);


//--------------auto invoc function--------(se executa momentan)

// ( (x,y) => {console.log(x+y);} )(10,20);


//--------------DOM--------------
// let p1 = document.getElementsByClassName('class'); //returneaza HTML collection
// let p2 = document.getElementById("id"); //returneaza elemtul cu id daca il gaseste
// let p3 = document.querySelector('.second')  //accepta atat un id cat si o clasa si returneaza toate elemtele gassite dupa clasa sau id
// let h1 = document.querySelectorAll('#heading');//returneaza elemtentul cautat dupa clasa sau id
// // console.log(p1);
// // console.log(p2);
// // console.log(p3);
// // console.log(h1);

// // p2.innerHTML = "<span style ='color:red;'>Span rosu</span>" //se modifica textul in html
// // p3.textContent = "TEXT MODIFICAT" //se modifica textul in html

// //------------EXEMPLE--------------
// const cars = ["Toyota","Nissan","Ferrari","Dacia"];

// let container = document.querySelector('.container');
// function showArrayInDoom(arr)
// {
//     let html = "<ul class='cars'>";
//     for (let i = 0; i < arr.length; i++) {
//         html+=` <li class='car_item'>${arr[i]}</li>`;
//     }
//     return html+='</ul>';
// }

// container.innerHTML = showArrayInDoom(cars);

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



//---------------------------------------
//---------------------------------------
//--------------EVENT LISTENERS----------
//---------------------------------------
//---------------------------------------

//arrow function with style
// const changeColor = () =>
// {
//     document.body.style.backgroundColor = "#a2a8d3";
// }
// changeColor();

// const changefontsize = (size) =>
// {
//    let h1 =  document.getElementsByTagName('button');
//     for (let i = 0; i < h1.length; i++) {
//         h1[i].style.fontSize=`${size}px`;
        
//     }
// }
// changefontsize(200);


// let counter = 0;
// document.querySelector('.increment').addEventListener('click',()=>{
//     counter++;
//     console.log(counter);
//     document.querySelector('p').innerText = counter;
// });

// document.querySelector('.decrement').addEventListener('click',()=>{
//     counter--;
//     console.log(counter);
//     document.querySelector('p').innerText = counter;
// });

//CUM LUAM INFORMATIA DIN INPUT

// document.querySelector('button').addEventListener('click',()=>
// {
//     const input = document.querySelector('input').value;
//     let p = document.querySelector('p');
//     p.innerHTML = `<span style = 'color:white'>${input}</span>`
// })


