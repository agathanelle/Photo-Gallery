/* eslint-disable import/no-unused-modules */
import { useEffect } from 'react';
import Photo from './components/Photo';
import Error from '../common/components/Error';
import useAPI from '../common/hooks/useAPI';
import { fetchPhotos } from '../common/requests';

export default function Gallery() {
    const { data: photos, loading: isLoading, error: error, call } = useAPI();

    useEffect(() => {
        call(fetchPhotos);
    }, []);

    console.log(photos);

    if (isLoading || !photos) {
        return <div>Loading</div>;
    }
    return (
        <div>
            {photos && photos.map((photo) => <Photo key={photo.id} photo={photo}></Photo>)}
            {!error && <Error />}
        </div>
    );
}
