import style from './SearchBar.module.css';
import { toast } from 'react-toastify';

const SearchBar = ({ onSubmit }) => {
  const searchForm = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();

    if (query === '') {
      toast.info('Please enter a search term!');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <form onSubmit={searchForm} className={style['search-form']}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
