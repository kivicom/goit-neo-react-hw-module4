import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style['gallery-list']}>
      <ImageCard images={images} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;
