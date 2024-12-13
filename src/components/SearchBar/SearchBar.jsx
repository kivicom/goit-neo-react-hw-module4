import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const searchForm = e => {
    e.preventDefault();
    const form = e.target;
    console.dir(form.elements.query.value);
    if (form.elements.query.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    onSubmit(form.elements.query.value.trim());
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
