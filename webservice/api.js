import { response } from 'express';

function apiCall(params) {
  const KEY = process.env.API_KEY;
  const search = document.getElementById('query');
  const value = search.value;
  console.log(value);
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  ).then((response) => response.json().then((data) => data));

  // TODO: data gets pushed to array and then sent to search view to generate elements
  data.results;
}

apiCall(query.params);
