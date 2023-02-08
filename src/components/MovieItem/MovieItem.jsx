import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Title, StyledLink, MoviePoster } from './MovieItem.styled';

export const MovieItem = ({ id, title, image }) => {
  const location = useLocation();

  return (
    <li>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <MoviePoster
          src={
            image
              ? `https://image.tmdb.org/t/p/w500/${image}`
              : 'https://screench.com/upload/no-poster.jpeg'
          }
          alt={title ? title : 'Movie title not available'}
          width="300"
          height="450"
        />
        <Title>{title ? title : 'Movie title unavailable'}</Title>
      </StyledLink>
    </li>
  );
};
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
