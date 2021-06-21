

import { MoviePreview } from '../MoviePreview/MoviePreview'
import './MovieList.scss'
import loader from '../../assets/images/Spinner.svg'

export const MovieList = ({ movies }) => {
    return (
        // <div>
        <div className="movieList flex">
            {movies ? movies.map((movie, idx) => <MoviePreview key={idx} movie={movie} />) : <div className="loader flex center"><img src={loader} alt=""/></div>}
        </div>
        // </div>
    )
}

