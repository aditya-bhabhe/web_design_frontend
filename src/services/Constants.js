export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';
export const API_KEY = '8a9f6e472443b99e4c1db17d69a9fa3f';

// export const HEROKU_BASE_URL = 'https://cryptic-ravine-64649.herokuapp.com';

export const HEROKU_BASE_URL = 'http://localhost:3000';

export const POPULAR_MOVIES_URL = TMDB_BASE_URL + '/discover/movie?api_key=' + API_KEY + '&&sort_by=popularity.desc';
export const NOW_PLAYING_MOVIES_URL = TMDB_BASE_URL + '/movie/now_playing?api_key=' + API_KEY;
export const MOVIE_DETAIL_URL = TMDB_BASE_URL + '/movie/MOVIE_ID?api_key=' + API_KEY;
export const MOVIE_CAST_URL = TMDB_BASE_URL + '/movie/MOVIE_ID/credits?api_key=' + API_KEY;
export const MOVIE_SEARCH_URL = TMDB_BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=QUERY';
export const GET_REVIEWS_FOR_MOVIE_URL = HEROKU_BASE_URL + '/reviews?movieId=MOVIE_ID';
export const ADD_REVIEW_FOR_MOVIE_URL = HEROKU_BASE_URL + '/reviews';
export const ADD_MOVIE_TO_WATCHLIST_URL = HEROKU_BASE_URL + '/users/USER_ID/watchlist/MOVIE_ID';
export const REMOVE_MOVIE_FROM_WATCHLIST_URL = HEROKU_BASE_URL + '/users/USER_ID/unwatchlist/MOVIE_ID';
export const TWITTER_SEARCH_BY_MOVIE_NAME_URL = HEROKU_BASE_URL + '/twitter/MOVIE_NAME';


export const user_login_url = `${HEROKU_BASE_URL}/users/login`;
export const user_get_profile = `${HEROKU_BASE_URL}/users/profile`;
export const user_signup_url = `${HEROKU_BASE_URL}/users/signup`;
export const user_logout = `${HEROKU_BASE_URL}/users/logout`;
export const user_findById = `${HEROKU_BASE_URL}/users/`;
export const user_deleteReview = `${HEROKU_BASE_URL}/reviews/`;
export const user_search_url = `${HEROKU_BASE_URL}/users/search/`;
export const user_updateReview = `${HEROKU_BASE_URL}/reviews/`;
