import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const apiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (await fetch(apiUrl)).json();
        setMovie(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, []);
    return <article>        
        <img src={movie.medium_cover_image} />
        <Link to={movie.url}><h1>{ movie.title_long }</h1></Link>
    </article>
}

export default Detail;