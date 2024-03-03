//creati un json in biblioteca cu 10 carti. filtrati din json dat fiecare carte dupa rating si aratati in DOM
//creati un obiect in baza la un string unde cheia e fiecare cuvant,iar valoarea e cantitatea vocalelor din cuvant. transformati in json
//cu 4 spatii libere si un replacer pentru a trasncrie cheile in uppercase


import biblioteca from "./carti.json" assert {type : "json"};
// console.log(biblioteca);


    const ratingContainer = document.querySelector('#rating-list');
    ratingContainer.textContent = "";
    const carti = [];
    for(const carte in biblioteca)
    {
        carti.push(biblioteca[carte].rating);
    }

    carti.sort((a,b)=>(a-b));

    carti.forEach(rating=>
        {
            const listItem = document.createElement('li');
            listItem.textContent = rating;
            ratingContainer.appendChild(listItem);
        })


const booksListElement = document.getElementById('book-list');
booksListElement.textContent = "";
for(const book in biblioteca)
{
    const carte = biblioteca[book];
    const listElement = document.createElement('li');
    listElement.innerHTML = `${carte.titlu} - ${carte.autor} : rating ${carte.rating}`;
    booksListElement.appendChild(listElement);
}