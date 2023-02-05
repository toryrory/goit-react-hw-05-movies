import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovie';

export const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
console.log(movieReviews);
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
      {movieReviews.lenght > 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
                  <p>{author}</p>
                  <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>This film has no reviews</div>
      )}
    </>
  );
};
