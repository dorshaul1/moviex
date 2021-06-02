import movieService from '../../services/movieService'

export function loadMovies(filterBy) {
  return async dispatch => {
    const movies = await movieService.query(filterBy)
    const action = {
      type: 'SET_MOVIES',
      movies
    }
    dispatch(action)
  }
}

export function getMovieById(movieId, isNull = false) {
  return async dispatch => {
    const movie = isNull ? null : await movieService.getCurrMovieById(movieId)
    dispatch({ type: 'SET_MOVIE', movie })
  }
}
export function saveMovie(movie) {
  return async dispatch => {
    const isAdd = !movie._id
    const updatedMovie = await movieService.saveMovie(movie)

    if (isAdd) dispatch({ type: 'ADD_MOVIE', movie: updatedMovie })
    else dispatch({ type: 'UPDATE_MOVIE', updatedMovie })
  }
}

export function removeMovie(movieId) {
  return async dispatch => {
    await movieService.remove(movieId)
    dispatch({ type: 'REMOVE_MOVIE', movieId })
  }
}

export function getPopularMovie() {
  return async dispatch => {
    const popularMovies = await movieService.getPopularMovie()
    dispatch({ type: 'POPULAR_MOVIES', popularMovies })
  }
}

export function getUpcomingMovie() {
  return async dispatch => {
    const upcomingrMovies = await movieService.getUpcomingMovie()
    dispatch({ type: 'UPCOMING_MOVIES', upcomingrMovies })
  }
}

export function searchMovie(movie, isNull = false) {
  return async dispatch => {
    const moviesResults = isNull ? null : await movieService.getMoviesBySearch(movie)
    // console.log('moviesResults:', moviesResults)
    // console.log('moviesResults:', moviesResults)
    dispatch({ type: 'SEARCH_MOVIES', moviesResults })
  }
}