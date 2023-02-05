import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MoviesSearchBar.styled';
import { getSearchedMovies } from 'services/fetchMovie';

export const Movies = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('moviename');

    useEffect(() => {
        if (!movieName) {
          return
        }
        getSearchedMovies(movieName).then(data => console.log(data)).catch(error => console.log(error))
        
  },[movieName])

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ moviename: form.elements.movie.value });
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
    </main>
  );
};
