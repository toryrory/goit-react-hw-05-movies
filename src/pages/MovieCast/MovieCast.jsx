import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/fetchMovie';
import { Gallery } from 'components/MovieGallery/MovieGallery.styled';

export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();
  console.log(movieCast);
  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setMovieCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieCast) {
    return;
  }
  return (
    <Gallery>
      {movieCast.slice(0, 15).map(({ id, profile_path, character, name }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-anime-thick-film-movie-shooting-illustration-png-image_1302654.jpg'
            }
            alt={`${character}`}
            width="300"
            height="450"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </Gallery>
  );
};
