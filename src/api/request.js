const requests = {
  fetchNowPlaying: 'movie/now_playing',
  fetchTrending: '/trending/all/week',
  fetchTopRated: '/movie/top_rated',
  fetchActionMovies: '/discover/movie?with+genres=28',
  fetchComedyMovies : '/discover/movie?with+genres=35',
  fetchHorrorMovies : '/discover/movie?with+genres=27',
  fetchRomanceMovies: '/discover/movie?with+genres=10749',
  fetchDocumentMovies: '/discover/movie?with+genres=99',
}

export default requests;