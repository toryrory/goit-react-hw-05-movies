import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Movies.styled';
import { getSearchedMovies } from 'services/fetchMovie';
import { MovieGallery } from '../../components/MovieGallery/MovieGallery';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
injectStyle();

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('moviename');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    getSearchedMovies(movieName.toLowerCase())
      .then(data => {
        data.length > 0
          ? setMovies(data)
          : toast.info(
              'Sorry, site search did not return any results. Try to change your request.'
            );
      })
      .catch(error => console.log(error));
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formValue = form.elements.movie.value;
    if (formValue) {
      setSearchParams({ moviename: form.elements.movie.value });
    } else {
      toast.error('Please, enter a movie name');
    }
    form.reset();
  };
  return (
    <main>
      <Header>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch style={{ width: 25, height: 25 }} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
            name="movie"
          />
        </SearchForm>
      </Header>
      {movies && <MovieGallery movies={movies} />}
      <ToastContainer autoClose={3000} />
    </main>
  );
};
export default Movies;
