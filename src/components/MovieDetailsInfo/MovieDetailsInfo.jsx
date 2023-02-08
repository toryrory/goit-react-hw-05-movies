import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Title,
  Span,
  Text,
  VoteAvarage,
  List,
  StyledLink,
} from './MovieDetailsInfo.styled';

export const MovieDetailsInfo = ({ movieInfo }) => {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    genres,
    overview,
    vote_count,
  } = movieInfo;
  return (
    <>
      <Container>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://screench.com/upload/no-poster.jpeg'
          }
          alt={`${title}`}
          height="500"
        />
        <div>
          <Title>
            {title} ({release_date.slice(0, 4)})
          </Title>
          <Text>
            <Span>Votes: </Span>
            <VoteAvarage>{vote_average.toFixed(1)}</VoteAvarage> / {vote_count}{' '}
            voted
          </Text>
          <Text>
            {' '}
            <Span>Genres:</Span> {genres.map(({ name }) => name).join(', ')}
          </Text>
          <Text>{overview}</Text>
          <List>
            <li>
              <StyledLink to="cast">🕺 Cast information</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">🎭 Review information</StyledLink>
            </li>
          </List>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

MovieDetailsInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
