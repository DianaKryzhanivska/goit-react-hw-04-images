import * as API from '../../services/PixabayApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    const addImages = async () => {
      try {
        setIsLoading(true);

        const data = await API.getImages(searchName, currentPage);

        if (data.hits.length === 0) {
          return toast.error(
            'Sorry, there are no images matching your query. Please try again.',
            {
              position: 'top-right',
            }
          );
        }

        const normalizedImages = API.normalizedImages(data.hits);

        setImages(prevImages => [...prevImages, ...normalizedImages]);
        setIsLoading(false);
        setError('');
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        toast.error('Something went wrong!', {
          position: 'top-right',
        });
      } finally {
        setIsLoading(false);
      }
    };

    addImages();
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleSubmit = query => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  return (
    <div>
      <ToastContainer transition={Zoom} />
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
};

export default App;
