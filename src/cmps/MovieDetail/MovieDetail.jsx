

import { useEffect, useState } from 'react'
import movieService from '../../services/movieService'
import './MovieDetail.scss'
import defaultImg from '../../assets/images/noPhoto.png'
import ReactPlayer from 'react-player'
import { MovieList } from '../MovieList/MovieList'


export const MovieDetail = (props) => {
    const [movie, setMovie] = useState(null)
    useEffect(async () => {
        const movie = await movieService.getCurrMovieById(props.match.params.movieId)
        setMovie(movie)
        console.log('movie:', movie)
        window.scrollTo(0, 0)
        return () => {
        }
    }, [props.match.params.movieId])

    const findJobType = (job) => {
        return movie.crew.filter((c) => c.job === job)
    }

    return (
        <div className="movieDetail flex column align-center">
            {movie && <div className="movie-detail-container ">
                <div className="movie-title-container" style={{ "backgroundImage": `url(${movie.backDrop})` }}>
                    <div className="screen flex space-between align-center">

                        <img className="movieImage" src={movie.image} alt="" />
                        <div className="movie-information-container">
                            <h1 className="movie-titie">{movie.title}<span className="movie-date">({movie.release_date.split('-')[0]})</span></h1>
                            <div className="subtitle flex">
                                {movie.genres.map((genre) => <h5 className="genre" key={genre.id}>{genre.name}</h5>)}
                            </div>
                            <h2>Overview</h2>
                            <p className="overview">{movie.overview}</p>

                            <h2>Crew</h2>
                            <div className="crew flex wrap">

                                {findJobType("Director" || "Directing").map((job) => {
                                    return <div key={job.id} className="job-container">
                                        <h4 className="job-name">{job.name}</h4>
                                        <h5 className="job">Director</h5>
                                    </div>
                                })}
                                {findJobType("Writing").map((job) => {
                                    return <div key={job.id} className="job-container">
                                        <h4 className="job-name">{job.name}</h4>
                                        <h5 className="job">Writing</h5>
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="more-details flex column">

                    <h1 className="title">Cast</h1>
                    <div className="actors-container flex ">
                        {movie.actors.map((actor) =>
                            <div key={actor.id} className="actor-preview flex column ">
                                {actor.profile_path ? <img src={actor.image} /> : <img className="default-image" src={defaultImg} />}
                                <div className="actor-information">

                                    <h2>{actor.character}</h2>
                                    <h3> {actor.name} </h3>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="movie-more-information-container flex column">
                        <h1 className="title">Production </h1>
                        {movie.production_companies.map((company) => {
                            return <div key={company.id} className="company flex column">
                                {/* <h3>{company.name}</h3> */}
                                <img src={company.logo_path} />
                            </div>
                        })}
                    </div>
                </div>

                <h1 className="title">Media</h1>
                <div className="media">
                    <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${movie.videos[0].key}`} />
                </div>

                <h1 className="title">Similiar Movies</h1>
                <div className="similiar-movies">
                    {< MovieList movies={movie.similarMovies} />}
                </div>
            </div>}
        </div>
    )
}
