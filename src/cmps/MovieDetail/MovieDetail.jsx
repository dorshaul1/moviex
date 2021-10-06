import { useEffect, useState } from 'react'
import './MovieDetail.scss'
import defaultImg from '../../assets/images/not-found.png'
import ReactPlayer from 'react-player'
import { MovieList } from '../MovieList/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieById } from '../../store/actions/movieAction'
import loader from '../../assets/images/Spinner.svg'
import { useHistory } from 'react-router'
import { userService } from '../../services/userService'


export const MovieDetail = (props) => {
    const state = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    let history = useHistory();
    const [isMovieFav, setIsMovieFav] = useState(false)

    useEffect(() => {
        dispatch(getMovieById(props.match.params.movieId))
        window.scrollTo(0, 0)
        return () => {
            dispatch(getMovieById())
        }
    }, [props.match.params.movieId])

    useEffect(() => {
        state.currMovie && isFavInitial()
    }, [state.currMovie])


    const isFavInitial = () => {
        setIsMovieFav(userService.checkIfMovieFav(state.currMovie.id))
    }

    const findJobType = (job) => {
        return movie.crew.filter((c) => c.job === job)
    }

    const onClickActor = (actorId) => {
        history.push(`/actor/${actorId}`)
    }

    // const toggleFav = () => {
    //     setIsMovieFav(!isMovieFav)
    //     userService.toggleFavMovie(state.currMovie.id)
    // }

    const movie = state.currMovie
    return (
        <div className="movieDetail flex column align-center">
            {movie ? <div className="movie-detail-container ">
                <div className="movie-title-container" style={{ "backgroundImage": `url(${movie.backDrop})` }}>
                    <div className="screen flex space-between align-center">

                        <img className="movieImage" src={movie.image} alt="" />
                        <div className="movie-information-container">
                            <div className="movie-header">
                                {/* <div onClick={toggleFav} className={`fav-btn ${isMovieFav ? 'favorite' : ''}`}>❤</div> */}
                                <h1 className="movie-titie">{movie.title}<span className="movie-date">({movie.release_date.split('-')[0]})</span></h1>
                                <div className="subtitle flex">
                                    {movie.genres.map((genre) => <h5 className="genre" key={genre.id}>{genre.name}</h5>)}
                                </div>
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
                            <div key={actor.id} onClick={() => onClickActor(actor.id)} className="actor-preview flex column ">
                                {actor.profile_path ? <img src={actor.image} alt="" /> : <img className="default-image" src={defaultImg} alt="" />}
                                <div className="actor-information">

                                    <h2>{actor.character}</h2>
                                    <h3> {actor.name} </h3>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="movie-production flex column">
                        <h1 className="title">Production </h1>
                        {movie.production_companies.map((company) => {
                            return <div key={company.id} className="company flex column">
                                {company.logo_path ? <img src={company.logo_path} alt="" /> : <h6>{company.name}</h6>}
                            </div>
                        })}
                    </div>
                </div>
                {movie.videos[0] && <div className="media-container flex column center">

                    <h1 className="title">Media</h1>
                    <div className="media flex center">
                        <ReactPlayer width="100%" className="trailer" controls={true} url={`https://www.youtube.com/watch?v=${movie.videos[0].key}`} />
                    </div>
                </div>}

                <div className="similiar-movies">
                    <h1 className="title">Similiar Movies</h1>
                    {< MovieList movies={movie.similarMovies} />}
                </div>
            </div> : <div className="loader flex center"><img src={loader} /></div>}
        </div>
    )
}
