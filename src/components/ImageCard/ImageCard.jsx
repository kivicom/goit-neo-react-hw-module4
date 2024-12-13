import style from './ImageCard.module.css';

const ImageCard = ({ images, openModal }) => {
  return (
    <>
      {images.map((image, i) => {
        return (
          <li
            className={style['gallery-item']}
            key={`${image.id}-${i}`}
            onClick={() => openModal(i)}
          >
            <img src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </>
  );
};

export default ImageCard;
