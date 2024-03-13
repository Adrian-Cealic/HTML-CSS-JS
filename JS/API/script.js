//API -- application programming interface (API) este o unealta de comunicare dintre doua componente
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const numberOfPostsToFetch = 5;
// fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(res => res.json())
//    .then(json =>
//     {
//         const posts = json.slice(0,numberOfPostsToFetch);
//         console.log(posts);
//     })
//     .catch(error => console.log("cererea gresita.Codul erorii:",error));

//async - cuvantul cheie care transforma orice functie in functie asincrona. Odata cu cuvantul dat
//devine disponibil vuvantul "await" care prelucreaza pentru noi promise-ul

document.addEventListener("DOMContentLoaded",()=>
{
    const questionOutput = document.querySelector('.question');
    const answersOuptut = document.querySelector('.answers');
    const nextQuestionBtn = document.querySelector('.next-question');


async function fetchApi()  //functia async permite folosirea await pentru a primit un promise intr-o variabila 
{
try{

const response = await fetch (`https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=multiple`)
const json = await response.json();
const question = json.results[0].question;
const incorectAnswers = json.results[0].incorrect_answers;
const correctAnswer = json.results[0].correct_answer;

const allAnswers =[...incorectAnswers,correctAnswer];
allAnswers.sort(()=>Math.random() - 0.5);

return {question : question,asnwers : allAnswers, correctAnswer:correctAnswer};
}catch(error){
    console.log(error);
    return null;
}
}

  function displayFetchedData({question,asnwers,correctAnswer}){
    const parser = new DOMParser();
    const decodedQuestion = parser.parseFromString(`<!doctype html><body>${question}`,'text/html').body.textContent;
    const decodedAnswers = asnwers.map(answer => parser.parseFromString(`<!doctype html><body>${answer}`,'text/html').body.textContent);
    
    questionOutput.textContent = decodedQuestion;
    answersOuptut.innerHTML="";
    decodedAnswers.forEach(answer =>
        {
            const answerBtn = document.createElement('button');
            answerBtn.classList.add('answer');
            answerBtn.textContent = answer;
            answerBtn.addEventListener('click',()=> checkAnswer(answer,correctAnswer));
            answersOuptut.appendChild(answerBtn);
        });
}

function checkAnswer(userAnswer,correctAnswer)
{
   if(userAnswer === correctAnswer)
   {
    alert('Maladet !');
    displayNextQuestion();
   }else{
    alert('Cartea in mana !');
   }

};

async function displayNextQuestion()
{
    const data = await fetchApi();
    if(data)
    {
        displayFetchedData(data);
    }
    else{
        alert('smth went wrong');
    }

}
displayNextQuestion();

nextQuestionBtn.addEventListener('click',displayNextQuestion);
});

//TODO: de scris codul pentru terminarea jocului(cate raspunsuri corecte\gresite),verificam daca intreabrea a fost si inlocuim cu alta





