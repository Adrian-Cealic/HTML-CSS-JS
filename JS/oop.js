// let car=
// {
//     name:"toyota camry",
//     year: 2020,
//     color: "black"
// }

// let student=
// {
//     nume:"adrian",
//     prenume:"cealic",
//     classes:["mate","engleza","CS"]
// }

// console.log(car)
// console.log(car.name)
// console.log(student.classes)


 let localizare="Europa de sud-est"
 let anDeIndependenta=1991 
 let presedinte="Maia Sandu"
 let UE=false
 let populatie=2615000
 console.log(`Moldova cu o populatie de ${populatie} este situata in ${localizare}.Si a obtinut independenta in anul ${anDeIndependenta}.La moment la conducerea tarii este presedintele ${presedinte}. Se afla in UE ? : ${UE}`)

console.log("Tipul de date pentru localizare este :" + typeof localizare)
console.log("Tipul de date pentru anDeIndependenta este :" + typeof anDeIndependenta)
console.log("Tipul de date pentru presedinte este :" + typeof presedinte)
console.log("Tipul de date pentru UE este :" + typeof UE)
console.log("Tipul de date pentru populatie este :" + typeof populatie)

let tari=["Estonia","Letonia","Lituania"]

console.log("Tarile baltice sunt:")
for(let i=0;i<tari.length;i++)
{
    console.log(tari[i])
}
console.log("Tarile baltice sunt:")
for (let baltic of tari)
{
    console.log(baltic)
}

let scoala=
{
    nume:"Mihai Viteazul",
    clase: 12,
    tip:"Liceu",
    elevi:1832,
    locatie:"Strada Mitropolit Gurie Grosu 4"
}
console.log(`Scoala ${scoala.nume} este de tip ${scoala.tip} are ${scoala.clase} clase, cu aproximativ ${scoala.elevi} localizata pe ${scoala.locatie} `)