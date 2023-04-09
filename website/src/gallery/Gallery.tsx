/* eslint-disable import/no-unused-modules */
import { useEffect, useState } from 'react';
import { PhotoType } from '../common/types';
import { perPageValue, PexelsAPIKey, PexelsAPIUrl, queryValue } from '../common/consts';
import Photo from './components/Photo';
import Error from '../common/components/Error';

export default function Gallery() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos(queryValue, perPageValue, page);
  }, [page]);

  async function fetchPhotos(query: string, per_page: number, page: number) {
    setLoading(true);
    try {
      const response = await fetch(`${PexelsAPIUrl}/v1/search?per_page=${per_page}&query=${query}&page=${page}`, {
        headers: {
          Authorization: PexelsAPIKey,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPhotos((prevPhotos) => [...prevPhotos, ...(data.photos as PhotoType[])]);
        const allPhotos: PhotoType[] = JSON.parse(localStorage.getItem('photos') || '[]');
        allPhotos.push(...data.photos);
        localStorage.setItem('photos', JSON.stringify(allPhotos));
        setError(null);
      } else {
        setError('Failed to fetch photos');
      }
    } catch (error) {
      setError('Failed to fetch photos. Detailed error: ' + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (Math.round(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <></>
      ) : (
        <div className="container">
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo}></Photo>
          ))}
          {error && <Error text={error} />}
        </div>
      )}
    </div>
  );
}
