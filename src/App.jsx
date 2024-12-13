import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import { searchPhotos } from './api/photos-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchPhotos() {
      setLoading(true);
      setError(false);
      try {
        const response = await searchPhotos(query, page);

        if (page === 1) {
          setPhotos(response.results);
        } else {
          setPhotos(prevPhotos => [...prevPhotos, ...response.results]);
        }
        setTotalPages(Math.ceil(response.total / 12));
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [page, query]);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = index => {
    setSelectedImage(photos[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Container>
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {photos.length === 0 && !loading && !error && query && (
          <p>
            No results found for your search query. Please try another keyword.
          </p>
        )}
        {photos.length > 0 && (
          <ImageGallery images={photos} openModal={openModal} />
        )}
        {loading && <Loader />}
        {photos.length > 0 && page < totalPages && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      </Container>
    </>
  );
}

export default App;
