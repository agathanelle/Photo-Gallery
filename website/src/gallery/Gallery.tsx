import { useEffect, useState } from 'react';
import { PhotoType } from '../common/types';
import { PexelsAPIKey, PexelsAPIUrl } from '../common/requests';
import Photo from './components/Photo';

export default function Gallery() {
	const [photos, setPhotos] = useState<PhotoType[]>([]);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	//if (!localStorage['favouritedPhotos']) localStorage.setItem('favouritedPhotos', '');

	useEffect(() => {
		fetchPhotos('nature', 15, page);
	}, [page]);

	async function fetchPhotos(query: string, per_page: number, page?: number) {
		setLoading(true);
		fetch(`${PexelsAPIUrl}/v1/search?per_page=${per_page}&query=${query}&page=${page}`, {
			headers: {
				Authorization: PexelsAPIKey
			}
		})
			.then((response) => response.json())
			.then((data) => {
				setPhotos((prevPhotos) => [...prevPhotos, ...(data.photos as PhotoType[])]);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}

	const handleScroll = () => {
		if (Math.round(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight && !loading) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	//unique data
	return (
		<>
			{photos ? (
				<div className="container">
					{photos.map((photo) => (
						<Photo key={photo.id} photo={photo}></Photo>
					))}
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}
