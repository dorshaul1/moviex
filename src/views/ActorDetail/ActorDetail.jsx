import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActorDetail } from '../../store/actions/movieAction'
import './ActorDetail.scss'
import defaultImg from '../../assets/images/not-found.png'
import { MovieList } from '../../cmps/MovieList/MovieList'

export const ActorDetail = (props) => {
    const state = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    const [isTextLimited, setIsTextLimited] = useState(true)

    useEffect(() => {
        dispatch(getActorDetail(props.match.params.actorId))
        window.scrollTo(0, 0)
        return () => {
            dispatch(getActorDetail())
        }
    }, [props.match.params.actorId])

    const showLimitedText = (text) => {
        const worldsCount = text.split(' ')
        return isTextLimited ? worldsCount.splice(0, 100).join(' ') : text
    }

    const onReadMore = () => {
        setIsTextLimited(!isTextLimited)
    }

    const formatDate = (date) => {
        const dateToFormat = new Date(date)
        // return dateToFormat.toDateString()
        var year = dateToFormat.getFullYear();

        var month = (1 + dateToFormat.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = dateToFormat.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + '/' + day + '/' + year;
    }

    const calculateAge = (date, deathDate = false) => {
        const birthYear = new Date(date).getFullYear()
        const deathYear = new Date(deathDate).getFullYear()
        const currYear = new Date(Date.now()).getFullYear()
        return deathDate ? deathYear - birthYear : currYear - birthYear

    }

    const { currActor } = state
    return (
        currActor && <div className="actorDetail flex column">
            <div className="actor-title-container flex">

                {currActor.profile_path ? <img className="actor-img" src={currActor.image} alt="" /> : <img className="default-image" src={defaultImg} alt="" />}
                <div className="actor-information">

                    <h1 className="actor-name">{currActor.name}</h1>
                    <h2 className="title">Birthday</h2>
                    <h4>{formatDate(currActor.birthday)}
                        {currActor.deathday ? ` - ${formatDate(currActor.deathday)}` : ""}
                        <span className="age">{` (${currActor.deathday ? calculateAge(currActor.birthday, currActor.deathday) : calculateAge(currActor.birthday)})`}</span></h4>
                    <h2 className="title">Born At</h2>
                    <h4>{currActor.place_of_birth}</h4>

                </div>
            </div>

            <div className="actor-more-info">
                <h2 className="title">Biography</h2>
                <p className="biography">{showLimitedText(currActor.biography)}
                    {currActor.biography.split(' ').length > 100 && <span onClick={onReadMore} className="read-more">{isTextLimited ? "Read More→" : "Read Less←"}</span>}
                </p>
                <h2 className="title">More Movies</h2>
                < MovieList className="more-movies" movies={currActor.movies} />
            </div>
        </div>
    )
}

