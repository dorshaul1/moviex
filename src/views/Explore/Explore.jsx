

import { useEffect, useState } from 'react'
import { MovieList } from '../../cmps/MovieList/MovieList'
import movieService from '../../services/movieService'
import loader from '../../assets/images/Spinner.svg'
import './Explore.scss'

export const Explore = (props) => {
    const [movies, setMovies] = useState(null)
    const [popularMovies, setPopularMovies] = useState(null)
    const [upcomingrMovies, setUpcomingMovies] = useState(null)
    // const [searchedMovie, setSearchedMovie] = useState(null)

    useEffect(async () => {
        // dispatch(loadContacts(filterBy))
        // setContacts(contactsToShow)
        // setSearchedMovie('/title/tt10962368/')
        // movies = await movieService.getMovieByName(searchedMovie)
        // setMovies(await movieService.getMovieByName(searchedMovie))
        setPopularMovies(await movieService.getPopularMovie())
        setUpcomingMovies(await movieService.getUpcomingMovie())
        // console.log(popularMovies);
        // console.log(movies);
        // console.log('contacts:', contacts)
        return () => {
        }
    }, [])

    return (
        <div className="explore ">
            { (popularMovies && upcomingrMovies) ? <div className="explore-container">
                <div className="title flex align-center">
                    <div className="decoration"></div>
                    <h1>Top 20 Popular Movies</h1>
                </div>
                < MovieList movies={popularMovies} />
                <div className="title flex align-center">
                    <div className="decoration"></div>
                    <h1>Upcoming Movies</h1>
                </div>
                < MovieList movies={upcomingrMovies} />
            </div> : <div className="loader flex center"><img src={loader}/></div>}

        </div>
    )
}

