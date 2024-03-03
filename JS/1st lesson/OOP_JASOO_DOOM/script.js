//OBIECTE - STRUCTURA DE DATA FORMATA DIN PERETI CHEIE - VALOARE

// const person = {
//   name : 'Elon',
//   age : 34
// }

// console.log(person.name);
// console.log(person.age);

// // person.age = 43;
// console.log(person);
// delete person.age;
// console.log(person);

const student = 
{
   name : "Alisa",
   age : 9,
   courses : ['math','romanian','art'],
   adress : 
   {
    street : 'Muncesti',
    number : 198
   },
   go : function()
   {
       console.log(`${this.name} merge la scoala`);
   }
};

// let arr = [[1,2,3],[4,5,6]]
// console.log(arr[1][2]);

// console.log(student.adress.number);
// console.log(student.courses);
// student.go();

//------------METODELE OBIECTULUI SI PROCESUL DE LUCRU---------------------

// for (const key in student) {  //arata proprietatile unui obiect
// console.log(key,student[key]);
// }

// const keys = Object.keys(student); //metoda returneaza un array de key
// const values = Object.values(student); //returneaza un array de valori
// console.log(keys);
// console.log(values);

// const entries = Object.entries(student);
// console.log(entries[2][1][0]);  //destructurizeaza obiectul in tablou creat din mai ulte tablouri mici in care se pastreaza perechile cheie : valoarea ca elemente aparte


// for (const [key,value] of entries) {
      
//     console.log(key,value);
    
// }

// student.grade = "3";  /SINTAXA PENTRU ADAUGAREA UNEI KEY NOUA
// console.log(student);


//spread sau ... =>sintaxa pentru a desface si a scoate elementele din colectie
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// let a= {status : "Avatar"};
// let b ={element : "fire"};
// let c ={...a,...b};
// console.log(c);

//LUNGIMEA OBIECTULUI

// function lenghtObject(obj)
// {
//     return Object.keys(obj).length;
// }

// console.log(lenghtObject(student));

// //maximum din valori

// const numbers ={
//     a : 10,
//     b : 5,
//     c : 30,
//     d : 2
// }
// const max =(obj) =>{
//     const values = Object.values(obj);
//     return Math.max(...values);
// }

// console.log(max(numbers));

// const hasAge = student.hasOwnProperty('age'); //returneaza true daca cheia cautata este prezenta in obiect in caz contrar returneza false
// console.log(hasAge);

// function hasProperty(obj,prop)
// {
//     return obj.hasOwnProperty(prop);
// }

// const hasName = hasProperty(student,'name');
// console.log(hasName);

// function convertObjInArray(obj)
// {
//     return Object.entries(obj)
// }

// console.log(student);

//CREAREA ELEMENTELOR PRIN JS
// const output = document.querySelector('.output');
// let p = document.createElement('p');
// p.textContent = 'Salut sunt paragraf';
// output.appendChild(p); //lipeste

//-----------mOVIE oBJECT db------------
const MovieDataBase =
{
   movie1: {
     title : 'Interstelar',
     director : 'Chistofer Nollan',
     year : 2024,
     img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2F-%2Fes%2Fdetail%2FInterestelar%2F0R7K0TE549R347J0B6BK9HIH58&psig=AOvVaw0WRe21bml3V_4ykfzCDGZn&ust=1708022268923000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiNj_a8q4QDFQAAAAAdAAAAABAE'
   },
   movie2:{
       title : 'Inception',
       director : 'Christofer Nollan',
       year : 2010,
       img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Finception&psig=AOvVaw0QkZx4eZRN2P5vHhtwhzS0&ust=1708022316935000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCy_4y9q4QDFQAAAAAdAAAAABAE'
   },
   movie3 :{
        title : 'The Wolf of Wall street',
        director : 'Martin Scorsese',
        year : 2013,
        img : 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9991602_p_v12_aj.jpg'      
    }
}

//Aratam obiectul in DOOM

function displayMovies()
{
    const movieListElement = document.getElementById('movie__list');
    movieListElement.textContent ="";
    for (const key in MovieDataBase) {
        const movie = MovieDataBase[key];
        const listItem = document.createElement('li');
        listItem.innerHTML = `${movie.title} - ${movie.director} (${movie.year})<br><img src=${movie.img}/>`;
        movieListElement.appendChild(listItem);
    }
}

//crearea unui film oricand apas pe buton

document.addEventListener('DOMContentLoaded',()=>    //cand are loc incarcarea paginii sau refresh
{
    const container = document.querySelector('#movie__container');
    displayMovies();

    const addButton = document.createElement('button');
    addButton.textContent = "Add new movie";

    addButton.addEventListener('click',()=>
    {
        const newMovie = 
        {
            title : prompt("Introduce numele filmului"),
            director : prompt("Introduce directorul filmului"),
            year : +prompt("Introduce anul filmului"),
            img : prompt('introduce linkul spre imaginea filmului')
        }

        const newKey = `movie${Object.keys(MovieDataBase).length + 1}`;
        MovieDataBase[newKey] = newMovie;
        displayMovies();
    })

    

    container.appendChild(addButton);
})  //
