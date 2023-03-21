import { useEffect, useState } from 'react';
import { APIResponse, photoType } from '../common/types';
import fetchPhotos from '../common/requests';
import Photo from './components/Photo';

export default function Gallery() {
	const [data, setData] = useState<photoType[]>([]);
	const [page, setPage] = useState(1);
	if (!localStorage['favouritedPhotos']) localStorage.setItem('favouritedPhotos', '');
	useEffect(() => {
		fetchNaturePhotos();
		setPage(page + 1);
	}, []);

	async function fetchNaturePhotos() {
		const newPhotos = await fetchPhotos<APIResponse>('nature', 800, page);
		setData((previousData) => [...previousData, ...newPhotos.photos]);
		console.log(data);
	}

	window.addEventListener('scroll', async () => {
		const isAtBottom = Math.round(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
		if (isAtBottom) {
			await fetchNaturePhotos();
			console.log(page);
			setPage(page + 1);
		}
	});

	return (
		<>
			{data ? (
				<div className="container">
					{data.map((photo) => (
						<Photo key={photo.id} photo={photo}></Photo>
					))}
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}
