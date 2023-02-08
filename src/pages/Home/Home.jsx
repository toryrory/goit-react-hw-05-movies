import { useState, useEffect } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { getTrendingMovies } from 'services/fetchMovie';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending movies</h1>
      {movies && <MovieGallery movies={movies} />}
    </>
  );
};
export default Home;
