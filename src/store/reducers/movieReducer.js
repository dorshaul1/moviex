const INITIAL_STATE = {
  movies: [],
  currMovie: null,
  currActor: null,
  popularMovies: null,
  upcomingrMovies: null,
  moviesResults:null
}

export function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.movies
      }
    case 'SET_MOVIE':
      return {
        ...state,
        currMovie: action.movie
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.movie]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== action.movieId)
      }
    case 'UPDATE_MOVIE':
      const { updatedMovie } = action
      return {
        ...state,
        movies: state.movies.map(movie => movie._id === updatedMovie._id ? updatedMovie : movie)
      }
    case 'POPULAR_MOVIES':
      const { popularMovies } = action
      return {
        ...state,
        popularMovies
      }
    case 'UPCOMING_MOVIES':
      const { upcomingrMovies } = action
      return {
        ...state,
        upcomingrMovies
      }
    case 'SEARCH_MOVIES':
      const { moviesResults } = action
      return {
        ...state,
        moviesResults
      }
    case 'SET_ACTOR':
      const { currActor } = action
      return {
        ...state,
        currActor
      }
      default:
        return state
      }
}