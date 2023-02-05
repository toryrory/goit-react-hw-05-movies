import { Link, useLocation} from "react-router-dom";

export const MovieItem = ({ id, title, image }) => {
      const location = useLocation();
  
  return (
    <li>
      <Link to={`/movies/${id}`} state={{from: location}}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={`${title ? title : 'Movie title unavailable'}`}
        width="300"
        height="450"
      />
        <p>{title ? title : 'Movie title unavailable'}</p>
      </Link>
    </li>
  );
};
