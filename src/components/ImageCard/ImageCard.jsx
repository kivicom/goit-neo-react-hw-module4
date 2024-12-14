import style from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={style['card-container']}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        className={style['gallery-image']}
        onClick={onClick} // Обработчик клика на теге img
      />
    </div>
  );
};

export default ImageCard;
