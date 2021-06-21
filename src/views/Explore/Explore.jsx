import { useEffect } from 'react'
import { MovieList } from '../../cmps/MovieList/MovieList'
import loader from '../../assets/images/Spinner.svg'
import './Explore.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovie, getUpcomingMovie } from '../../store/actions/movieAction'
import { Slider } from '../../cmps/Slider/Slider'

export const Explore = () => {
    const state = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovie())
        dispatch(getUpcomingMovie())
        return () => {
        }
    }, [])

    const { popularMovies, upcomingrMovies } = state
    return (
        <div className="explore ">
            {(popularMovies && upcomingrMovies) ? <div className="explore-container">
                <Slider movies={popularMovies} />

                <div className="suggestions-container">

                    <div className="title flex align-center">
                        <div className="decoration"></div>
                        <h1>Top Popular Movies</h1>
                    </div>
                    < MovieList movies={popularMovies} />
                    <div className="title flex align-center">
                        <div className="decoration"></div>
                        <h1>Upcoming Movies</h1>
                    </div>
                    < MovieList movies={upcomingrMovies} />
                </div>
            </div> : <div className="loader flex center"><img src={loader} alt=""/></div>}

        </div>
    )
}

