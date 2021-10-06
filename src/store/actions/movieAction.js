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

export function getMovieById(movieId = false) {
  return async dispatch => {
    const movie = movieId ? await movieService.getCurrMovieById(movieId) : null
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

export function searchMovie(movie = false) {
  return async dispatch => {
    const moviesResults = movie ? await movieService.getMoviesBySearch(movie) : null
    dispatch({ type: 'SEARCH_MOVIES', moviesResults })
  }
}

export function getActorDetail(actorId) {
  return async dispatch => {
    const currActor = actorId ? await movieService.getActorDetails(actorId) : null
    dispatch({ type: 'SET_ACTOR', currActor })
  }
}