import { useEffect, useState } from 'react';
import Button from '../../common/components/Button';
import { photoType } from '../../common/types';

export default function Photo({ photo }: { photo: photoType }) {
	//document.documentElement.style.setProperty('--loading-color', photo.avg_color);

	const [favourite, setFavourite] = useState(false);
	const [favouritedPhotos, setFavouritedPhotos] = useState([] as photoType[]);

	useEffect(() => {
		saveFavourite();
		const favourited = JSON.parse(localStorage.getItem('favouritedPhotos') || '');
		setFavouritedPhotos(favourited);
		console.log(favourite + ' ' + favouritedPhotos);
	}, []);

	const handleFavourite = () => {
		setFavourite(!favourite);
	};
	const saveFavourite = () => {
		if (favourite) addFavourite();
		else removeFavourite();
		localStorage.setItem('favouritedPhotos', JSON.stringify(favouritedPhotos));
	};
	const addFavourite = () => {
		setFavouritedPhotos([photo]);
	};
	const removeFavourite = () => {
		if (photo.id !== null) setFavouritedPhotos(favouritedPhotos.filter((item: photoType) => item.id !== photo.id));
	};
	return (
		<div className="photo-container">
			<img className="photo skeleton" src={photo.src.landscape} alt={photo.alt} loading="lazy" />
			<div className="overlay">
				<div className="photo-title">{photo.alt}</div>
				<hr className="custom-line" />
				<div className="photo-author">{photo.photographer}</div>
				<Button favourite={favourite} onClick={() => handleFavourite()} />
			</div>
		</div>
	);
}
