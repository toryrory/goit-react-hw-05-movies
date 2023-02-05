import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieData } from 'services/fetchMovie';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
    const location = useLocation();
    
  const backLinkHref = location.state?.from ?? '/';

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
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={`${movieData.title}`}
        />
        <div>
          <h1>
            {movieData.title} ({movieData.release_date.slice(0, 4)})
          </h1>
          <p>
            Votes: {movieData.vote_average.toFixed(1)} / {movieData.vote_count}{' '}
            voted
          </p>
          <p> genres: {movieData.genres.map(({ name }) => name).join(', ')}</p>
          <p>{movieData.overview}</p>
        </div>
      </div>
      <ul>
        <Link to="cast">Cast information</Link>
        <Link to="reviews">Review information</Link>
          </ul>
          <Outlet/>
    </main>
  );
};
