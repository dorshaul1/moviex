import { httpService } from "./http.service";

export default {
  query,
  getMovieById,
  remove,
  saveMovie,
  getEmptyMovie,
  getMovieByName,
  getPopularMovie,
  getCurrMovieById,
  getUpcomingMovie,
  getMoviesBySearch,
  // getMovieImages
}

const movies = [];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function query(filterBy = null) {
  return new Promise((resolve) => {
    var moviesToReturn = [...movies];
    if (filterBy && filterBy.name) {
      moviesToReturn = filter(filterBy.name)
    }
    resolve(sort(moviesToReturn))
  })
}

function getMovieById(id) {
  return new Promise((resolve, reject) => {
    const movie = movies.find(movie => movie._id === id)
    movie ? resolve(movie) : reject(`Movie id ${id} not found!`)
  })
}

function remove(id) {
  return new Promise((resolve) => {
    const index = movies.findIndex(movie => movie._id === id)
    if (index !== -1) {
      movies.splice(index, 1)
    }

    resolve(movies)
  })
}

function _updateMovie(movie) {
  return new Promise((resolve) => {
    const index = movies.findIndex(c => movie._id === c._id)
    if (index !== -1) {
      movies[index] = movie
    }
    resolve(movie)
  })
}

function _addMovie(movie) {
  return new Promise((resolve) => {
    movie._id = _makeId()
    movies.push(movie)
    resolve(movie)
  })
}

function saveMovie(movie) {
  return movie._id ? _updateMovie(movie) : _addMovie(movie)
}

function getEmptyMovie() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function filter(term) {
  term = term.toLocaleLowerCase()
  return movies.filter(movie => {
    return movie.name.toLocaleLowerCase().includes(term) ||
      movie.phone.toLocaleLowerCase().includes(term) ||
      movie.email.toLocaleLowerCase().includes(term)
  })
}

function getMovieByName(name) {
  return httpService.get('movie/searchMovie/' + name)
}

function getPopularMovie() {
  // console.log('sdcsdc');
  return httpService.get('movie/getPopularMovies/')
}
function getUpcomingMovie() {
  // console.log(httpService.get('movie/getUpcomingMovies/'))
  return httpService.get('movie/getUpcomingMovies/')
}

function getCurrMovieById(id) {
  return httpService.get('movie/getMovie/' + id)
}

function getMoviesBySearch(movie) {
  return httpService.get('movie/searchMovie/' + movie)
}
// function getMovieImages(movieId) {
  // return httpService.get('movie/getMovieImages/' + movieId)
// }
// function getSimiliarMovies(id) {
//   return httpService.get('movie//getSimilarMovies/' + id)
// }



function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}