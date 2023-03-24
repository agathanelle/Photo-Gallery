import { useEffect, useState } from 'react';
import Button from '../../common/components/Button';
import { PhotoType } from '../../common/types';

export default function Photo({ photo }: { photo: PhotoType }) {
	const [favourite, setFavourite] = useState<boolean>(false);
	const [photos, setPhotos] = useState<PhotoType[]>([]);

	useEffect(() => {
		document.documentElement.style.setProperty('--loading-color', photo.avg_color);
	}, [photo.avg_color]);

	useEffect(() => {
		const favouritedPhoto = JSON.parse(localStorage.getItem('photos') || '');
		if (favouritedPhoto.length > 0) {
			setPhotos(favouritedPhoto);
			const currentPhoto = favouritedPhoto.find((item: PhotoType) => item.id === photo.id);
			if (currentPhoto) {
				setFavourite(currentPhoto.liked);
			}
		}
	}, [photo.id]);

	const handleFavourite = () => {
		const newFavourited = photos.map((item) => {
			if (item.id === photo.id) {
				const newLiked = !item.liked;
				setFavourite(newLiked);
				return { ...item, liked: newLiked };
			}
			return item;
		});
		setPhotos(newFavourited);
		localStorage.setItem('photos', JSON.stringify(newFavourited));
	};

	return (
		<div className="photo-container">
			<img className="photo skeleton photo-size" src={photo.src.landscape} alt={photo.alt} loading="lazy" />
			<div className="overlay photo-size">
				<div className="photo-info-container photo-text">
					<div className="photo-title">{photo.alt}</div>
					<hr className="custom-line" />
					<div className="photo-author">{photo.photographer}</div>
					<Button favourite={favourite} onClick={() => handleFavourite()} />
				</div>
			</div>
		</div>
	);
}
