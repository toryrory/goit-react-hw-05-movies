import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieData } from 'services/fetchMovie';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetailsInfo } from 'components/MovieDetailsInfo/MovieDetailsInfo';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    getMovieData(movieId)
      .then(data => setMovieData(data))
      .catch(error => console.log(error));
  }, [movieId]);
  if (!movieData) {
    return;
  }

  return (
    <main>
      <BackLink path={backLinkHref.current}>Back to movies</BackLink>
      <MovieDetailsInfo movieInfo={movieData} />
    </main>
  );
};
export default MovieDetails;
