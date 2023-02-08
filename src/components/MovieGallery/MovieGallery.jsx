import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Gallery } from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  return (
    <>
      <Gallery>
        {movies.map(({ id, poster_path, title, name }) => (
          <MovieItem
            key={id}
            image={poster_path}
            title={title || name}
            id={id}
          />
        ))}
      </Gallery>
    </>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};
