//-----------------------------------------------------------------------------------------------------------------------------------------
//---------------------- JSON -> format de gisier ce provine de la js obiect notation. este bazat pe sintaxa obiectelor in js--------------
//---------------------- convertire in string. se folosesc in calitate de baza de date pentru informatii-----------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------

// let student = {
//     name : 'Tommy',
//     age : 30,
//     courses : ['JS','React','PHP'],
//     wife : null
// }
// let json = JSON.stringify(student); //metoda pentru a transforma un obiect in JSON


// console.log(JSON.parse(json)); //metoda pentru a transforma un JSON in obiect
// console.log(student);

/*
CREEAM JSON
1)JSON NU ARE VARIABILA IN CARE SE STOCHEAZA
{
    name : "Tommy" //eroare din cauza ca atributul nu este in ghilimele
    "surname": 'Shelby' //eroare din cauza ca se folosesc apostrof
    'is_maried' : "false" //eroare din cauza ca se folosesc apostrof
    "birthday" : new Date(20,03,2003) //nuj se accepta cuvantul new
    "gender" : "male" //eroare din cauza ca nu e virgula
    "money" : 243124123, //nu se pune virgula dupa ultimul element
 }


*/
//cand dorim sa importam un json in js fisier trebuie sa aduagam type="module" la fisierul nostru js in html pentru a lucra,transformand fisierul intr-un modul care poate
//fi exportat si importat
//odata ce importam un fisier json el automat este convertit in obiect
// import students from "./student.json" assert {type : "json"};
// console.log(students);
// for (const student of students) {
//     console.log(student.name,student.age);
//     for (const grade of student.grades) {
//         console.log(grade);
//     }
    
// }

const car = {
    brand : 'nissan',
    model : 'gtr r34',
    year : '1999'
}
delete car.year;
const jsonCar = JSON.stringify(car, null, 1);  //1 - spatii libere
console.log(jsonCar);

const user = [
{
    id : 12,
    username : 'jony228',
    password : 'hacker_darknet!1'
},
{
    id : 22,
    username : 'jony228',
    password : 'hacker_darknet!1' 
}
]

const secureWhenStringify = (key,value) =>
{
    if(key === 'password')
    {
        return "********";
    }
    return value;
}
//replacer (al doilea paremtru din stringify) este functia care automat v-a fi apelata in momentul conversiei pentru fiecare pereche cheie-valoarea,iar space (al treilea parametru din stringify) este parametrul care raspunde cate spatii libere sa fie in JSON
const jsonUser = JSON.stringify(user,secureWhenStringify,2);
console.log(jsonUser);
