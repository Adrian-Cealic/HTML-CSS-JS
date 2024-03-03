const MovieDataBase = {
    movie1: {
      title: 'Interstelar',
      director: 'Chistofer Nollan',
      year: 2024
    },
    movie2: {
      title: 'Inception',
      director: 'Christofer Nollan',
      year: 2010
    },
    movie3: {
      title: 'The Wolf of Wall street',
      director: 'Martin Scorsese',
      year: 2013
     }
  }
  
  function displayMovies() {
    const movieListElement = document.getElementById('movie__list');
    movieListElement.textContent = "";
    for (const key in MovieDataBase) {
      const movie = MovieDataBase[key];
      const listItem = document.createElement('li');
      listItem.innerHTML = `${movie.title} - ${movie.director} (${movie.year})<br>`;
      movieListElement.appendChild(listItem);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#movie__container');
    displayMovies();
  
    const addButton = document.getElementById('add-movie-button');
    addButton.addEventListener('click', () => {
      const inputValue = document.getElementById('new-movie-input').value;
      const inputArray = inputValue.split(',');
  
      const newMovie = {
        title: inputArray[0].trim(),
        director: inputArray[1].trim(),
        year: +(inputArray[2].trim()),
      };

      const newKey = `movie${Object.keys(MovieDataBase).length + 1}`;

      MovieDataBase[newKey] = newMovie;

      document.getElementById('new-movie-input').value = "";

      displayMovies();
    });
  });
       