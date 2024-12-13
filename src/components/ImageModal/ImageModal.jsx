import Modal from 'react-modal';
import { FaUser, FaHeart } from 'react-icons/fa';
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <button onClick={onRequestClose} className={style.closeButton}>
        ✕
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={style.image}
      />

      <div className={style.info}>
        <div className={style['user-info']}>
          <FaUser className={style.icon} />
          <span>{image.user.name}</span>
        </div>
        <div className={style['like-info']}>
          <FaHeart className={style.icon} />
          <span>{image.likes}</span>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
