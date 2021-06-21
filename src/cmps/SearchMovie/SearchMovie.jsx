

import { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import './SearchMovie.scss'

export const SearchMovie = () => {
    const [movie] = useState({})
    const [newMovie, handleChange] = useForm(movie)
    let history = useHistory();


    const onSearchMovie = (ev) => {
        ev.preventDefault()
        history.push(`/search/${newMovie.movie}`)
    }
    return (
        <div className="searchMovie flex">
            <form onSubmit={onSearchMovie} autoComplete="off">
                <input autoComplete="off" className="main-input" placeholder="Search movie" type="text" id="name" value={newMovie.name} onChange={handleChange} name="movie" />
                <button className="search-btn" >Search</button>
            </form>
        </div>
    )
}

