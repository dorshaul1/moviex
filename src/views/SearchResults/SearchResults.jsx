

// import { useEffect } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieList } from '../../cmps/MovieList/MovieList'
import { SearchMovie } from '../../cmps/SearchMovie/SearchMovie'
import { searchMovie } from '../../store/actions/movieAction'
import defaultImg from '../../assets/images/not-found.png'

import './SearchResults.scss'
import loader from '../../assets/images/Spinner.svg'
import { useHistory } from 'react-router'

export const SearchResults = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.movieReducer)
    let history = useHistory();

    const handleClick = (movie) => {
        history.push(`/details/${movie.id}`)
    }
    useEffect(() => {
        dispatch(searchMovie(props.match.params.search))
        return () => {
            dispatch(searchMovie(props.match.params.search, true))
        }
    }, [props.match.params.search])

    const formatedDate = (date)=>{
        const dateToFormat = new Date(date)
        return dateToFormat.toLocaleDateString()
    }
    // console.log('state.SearchResults:', state.moviesResults)
    return (
        <div className="searchResults">
            <SearchMovie />
            {state.moviesResults ?
                //  <MovieList movies={state.moviesResults}/>
                <section className="movie-results-container">
                    {state.moviesResults.map((movie) => {
                        console.log('movie:', movie)
                        return <div onClick={() => handleClick(movie)} className="movie-preview flex">
                            {/* <img src={(movie.image)} alt="" /> */}
                            {movie.poster_path ? <img src={movie.image} /> : <img className="default-image" src={defaultImg} />}
                            <div className="movie-details flex column space-between">
                                <div>

                                <h2>{movie.title}</h2>
                                <h4 className="date">{formatedDate(movie.release_date)}</h4>
                                {/* <Moment date={movie.release_date}/> */}
                                </div>
                                <p>{movie.overview.length > 200 ? movie.overview.substring(0, 200) + '...' : movie.overview}</p>
                            </div>
                        </div>
                    })}
                </section>
                : <div className="loader flex center"><img src={loader} /></div>}
            {/* {state.moviesResults && JSON.stringify(state.moviesResults)} */}
        </div>
    )
}

