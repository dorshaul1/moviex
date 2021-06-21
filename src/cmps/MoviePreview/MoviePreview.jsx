import './MoviePreview.scss'
import { useHistory } from 'react-router';

export const MoviePreview = ({ movie }) => {
    let history = useHistory();

    const handleClick = () => {
        history.push(`/movie/${movie.id}`)
    }
    return (
        <div onClick={handleClick} className="moviePreview">
            <img src={(movie.image)} alt="" />
            <h2>{movie.title}</h2>
        </div>
    )
}

