import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        movie.isActor?history.push(`/actor/${movie.id}`):history.push(`/movie/${movie.id}`)
    }
    useEffect(() => {
        dispatch(searchMovie(props.match.params.search))
        return () => {
            dispatch(searchMovie())
        }
    }, [props.match.params.search])

    const formatedDate = (date) => {
        const dateToFormat = new Date(date)
        return dateToFormat.toLocaleDateString()
    }
    return (
        <div className="searchResults">
            <SearchMovie />
            {state.moviesResults ?
                <section className="movie-results-container">
                    {state.moviesResults.map((movie, idx) => {
                        return <div onClick={() => handleClick(movie)} key={idx} className="movie-preview flex">
                            {movie.poster_path || movie.profile_path ? <img src={movie.image} alt="" /> : <img className="default-image" src={defaultImg} alt="" />}
                            <div className="movie-details flex column space-between">
                                <div>

                                    {movie.isActor ? <h2>{movie.name}</h2> : <h2>{movie.title}</h2>}
                                    {!movie.isActor && <h4 className="date">{formatedDate(movie.release_date)}</h4>}
                                </div>
                                {!movie.isActor && <p>{movie.overview.length > 200 ? movie.overview.substring(0, 200) + '...' : movie.overview}</p>}
                            </div>
                        </div>
                    })}
                </section>
                : <div className="loader flex center"><img src={loader} /></div>}
        </div>
    )
}

