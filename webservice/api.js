import { response } from 'express';

function apiCall(params) {
  const KEY = process.env.API_KEY;
  const search = query.params;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${search}&page=1&include_adult=false`
  ).then((response) => response.json().then((data) => data));
}

apiCall(query.params);
