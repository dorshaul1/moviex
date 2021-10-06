import './MoviePreview.scss'
import { useHistory } from 'react-router';
import defaultImg from '../../assets/images/not-found.png'

export const MoviePreview = ({ movie }) => {
    let history = useHistory();

    const handleClick = () => {
        history.push(`/movie/${movie.id}`)
    }
    return (
        <div onClick={handleClick} className="moviePreview">
            {movie.image ? <img src={(movie.image)} alt="" /> : <img className="default-image" src={defaultImg} alt="" />}
            <h2>{movie.title}</h2>
        </div>
    )
}

