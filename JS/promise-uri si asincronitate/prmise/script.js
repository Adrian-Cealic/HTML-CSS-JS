//Promise -> obiectul care ne promite noua un raspuns asincronic fie raspunsul pozitiv sau negativ
//Promise ul se poate afla in 3 stari:
// -pending -> asteptare apoi merge una din astea doua:
// -regected --eroare
// -fullfiled --acceptat

//simulare
// const myPromise = new Promise((res,rej)=>   //response sau reject
// {
//     //reason
//     let succes = false;  //simualarea de la server

//     if(succes)
//     {
//         res("Datele au fost incarcate cu succes");
//     }
//     else{
//         rej("Datele au fost respinse")
//     }

// }); 
// //prelucrare
// myPromise
//     .then((res)=>console.log(res))   //pentru pozitiv
//     .catch((error)=>console.log(error));  //pentru negativ

// function simplePromise(){
//     return new Promise((res,rej)=>
//     {
//         let succes = true;
//         if(succes){
//             res("succes");
//         }else{
//             rej("Datele nu au fost incarcate cu succes");
//         }
//     })
// }
// simplePromise()
//        .then((message)=>console.log(message))
//        .catch((error)=>console.log(error))
//        .finally(console.log("orice caz"));  //lucreaza mereu

// function authentificateUser(username,pass)
// {
//     return new Promise((res,rej)=>
//     {
//         if(username == "hacker" && pass =="admin")
//         {
//             res(`Logged in as ${username}`);
//         }
//         else{
//             rej("Failed to log in");
//         }
//     })
// }

// authentificateUser("hacker","admin")
//    .then((succes)=>console.log(succes))
//    .catch((error)=> console.log(error));

//generati un numar random  pana la 10 si returnati-l daca numarul este pana la 5,sau eroare  in cazul in care este mai mare

// function randomNumber()
// {
//     let nr = Math.floor(Math.random() * 10);

//     return new Promise((res,rej) =>
//     {
//           if(nr <= 5)
//           {
//             res("Succesfully generated from 0 to 5 :" + nr);
//           }
//           else{
//             rej("Failed");
//           }
//     })
// }

// randomNumber()
//       .then((succes) => console.log(succes))
//       .catch((error) => console.log(error));