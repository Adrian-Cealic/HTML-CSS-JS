//API -- application programming interface (API) este o unealta de comunicare dintre doua componente
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))

const numberOfPostsToFetch = 5;
fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(json =>
    {
        const posts = json.slice(0,numberOfPostsToFetch);
        console.log(posts);
    })
    .catch(error => console.log("cererea gresita.Codul erorii:",error));