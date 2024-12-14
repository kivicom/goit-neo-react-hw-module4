import style from './NoResults.module.css'; // Добавьте стили, если нужно

const NoResults = ({ message }) => {
  return (
    <p className={style['no-results']}>
      {message ||
        'No results found for your search query. Please try another keyword.'}
    </p>
  );
};

export default NoResults;
