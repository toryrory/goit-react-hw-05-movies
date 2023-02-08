import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovie';
import { Comment, CommentList, Text, Author } from './MovieReviews.styled';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setMovieReviews(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <>
      {movieReviews.length > 0 ? (
        <CommentList>
          {movieReviews.map(({ id, author, content }) => (
            <Comment key={id}>
              <Author>😎{author}:</Author>
              <Text>{content}</Text>
            </Comment>
          ))}
        </CommentList>
      ) : (
        <div>This film has no reviews</div>
      )}
    </>
  );
};
export default MovieReviews;
