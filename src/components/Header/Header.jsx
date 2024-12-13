import SearchBar from '../SearchBar/SearchBar';
import style from './Header.module.css';

function Header({ onSearch }) {
  return (
    <header className={style['galery-header']}>
      <SearchBar onSubmit={onSearch} />
    </header>
  );
}

export default Header;
