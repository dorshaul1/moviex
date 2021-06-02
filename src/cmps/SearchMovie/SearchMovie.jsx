

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { searchMovie } from '../../store/actions/movieAction'
import './SearchMovie.scss'

export const SearchMovie = () => {
    const [movie, setMovie] = useState({})
    const [newMovie, handleChange] = useForm(movie)
    const dispatch = useDispatch()
    let history = useHistory();


    const onSearchMovie = (ev) => {
        ev.preventDefault()
        // setMovie(newMovie.movie)
        // dispatch(searchMovie(newMovie.movie))
        history.push(`/search/${newMovie.movie}`)
    }
    return (
        <div className="searchMovie flex">
            <form onSubmit={onSearchMovie}>
                <input className="main-input" placeholder="Search movie" type="text" id="name" value={newMovie.name} onChange={handleChange} name="movie" />
                <button className="search-btn" >Search</button>
            </form>
        </div>
    )
}

