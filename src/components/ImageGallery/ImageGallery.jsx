import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style['gallery-list']}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`} className={style['gallery-item']}>
          <ImageCard image={image} onClick={() => openModal(index)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
