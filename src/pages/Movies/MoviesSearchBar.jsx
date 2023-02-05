// // import { useSearchParams } from 'react-router-dom';


// export const MoviesSearchBar = ({ onSubmit }) => {
//       const [query, setQuery] = useState('');

//       const handleChange = e => {
//         const { value } = e.currentTarget;
//         setQuery(value);
//       };
//       const handleFormSubmit = e => {
//         e.preventDefault();
//         onSubmit(query);
//         setQuery('');
//       };
//   return (
//     <Header>
//       <SearchForm>
//         <SearchFormButton type="submit">
//           <BsSearch style={{ width: 25, height: 25 }} />
//         </SearchFormButton>

//         <SearchFormInput
//           type="text"
//           autocomplete="off"
//           autoFocus
//           placeholder="Search movies"
//           value={searchParams.get('name') ?? ''}
//           onChange={handleInputChange}
//         />
//       </SearchForm>
//     </Header>
//   );
// };
