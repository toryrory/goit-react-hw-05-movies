import { useState, useEffect } from "react";
import { MovieGallery } from "components/MovieGallery/MovieGallery"
import { getTrendingMovies } from "services/fetchMovie"

export const Home = () => {
    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        getTrendingMovies().then(data => setMovies(data.results)).catch(error => console.log(error))
    }, [])
     
    return (
      <>
        {movies && <MovieGallery movies={movies}/>} 
      </>
    );
}