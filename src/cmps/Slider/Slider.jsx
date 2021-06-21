

import { useEffect, useState } from 'react'
import './Slider.scss'
import { SearchMovie } from '../../cmps/SearchMovie/SearchMovie'
import information from '../../assets/images/icons/information.svg'
import { useHistory } from 'react-router'

export const Slider = ({ movies }) => {
    const images = movies.map((movie) => movie.backDrop)
    const [randMovie, setRandMovie] = useState(null)
    let history = useHistory();

    const handleClick = () => {
        history.push(`/movie/${randMovie.id}`)
    }
    let lastRandIdx = null

    const getRandIdx = () => {
        const randIdx = Math.floor(Math.random() * images.length)
        if (randIdx !== lastRandIdx) {
            lastRandIdx = randIdx            //     // lastRandIdx = randIdx
        } else {
            getRandIdx()
        }
        return randIdx
    }

    let interval = null
    const getRandImage = () => {
        interval = setInterval(() => {
            setRandMovie(movies[getRandIdx()])
        }, 8000)
    }

    useEffect(() => {
        setRandMovie(movies[getRandIdx()])
        getRandImage()
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="slider">
            {randMovie && <div className="slide" style={{ "background": `url(${randMovie.backDrop})` }}>
                <div className="slide-screen column space-between flex">
                    <div className="movie-informaion flex align-center">
                        <img onClick={handleClick} className="information-btn" src={information} alt="" />
                        <h1>{randMovie.title}</h1>

                    </div>
                    <SearchMovie />
                </div>
            </div>}
        </div >
    )
}

