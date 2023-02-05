import { MovieItem } from "components/MovieItem/MovieItem";
import { Gallery } from "./MovieGallery.styled";

export const MovieGallery = ({ movies }) => {
    
    return (<>
        <h1>Trending movies</h1>
        <Gallery>
            {movies.map(({ id, poster_path, title }) => (
                <MovieItem key={id} image={poster_path} title={title} id={id} />
            ))}
        </Gallery>
    </>
    )
}