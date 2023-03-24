import { response } from 'express';
const mainEl = document.getElementById('main');

export default function apiCall() {
  const KEY = process.env.API_KEY;
  const search = document.getElementById('query');
  const value = search.value;
  console.log(value);
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  ).then((response) => response.json().then((data) => data));

  // TODO: data gets pushed to array and then sent to search view to generate elements
  const renderMovie = (movie) => {
    const cardEl = document.createElement('div');
    const movieImage = document.createElement('img');
    const movieTitle = document.createElement('h3');
    const moviePop = document.createElement('div');

    movieImage.classList.add('image');
    cardEl.classList.add('card');
    movieTitle.classList.add('movie-title');
    moviePop.classList.add('pop');

    cardImageEl.setAttribute('src', movie.results.poster_path);
    moviePop.innerText =
      movie.results.popularity + ' out of ' + movie.results.vote_count;
    movieTitle.innerText = movie.results.title;
    cardEl.appendChild(moviePop);
    cardEl.appendChild(movieTitle);
    cardEl.appendChild(cardImageEl);
    mainEl.appendChild(cardEl);
  };

  // handle each item in the arry of results
  const buttonHandler = () =>
    apiCall().then((response) =>
      response.forEach((movie) => renderMovie(movie))
    );
}
