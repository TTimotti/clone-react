import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, year, genres }) {
    return <div>
        <img src={ coverImg } alt=""></img>
        <h2>
            <Link to={`/movie/${id}`} >
                { title } ({ year })
            </Link>
        </h2>
        <p>{ summary }</p>
        <ul>
            { genres.map((g) => (
                <li key={ g }>{ g }</li>
            )) }
        </ul>
    </div>

}

Movie.porpsTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;