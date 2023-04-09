/* eslint-disable import/no-unused-modules */
import { PhotoType } from '../../common/types';

export default function Photo({ photo }: { photo: PhotoType }) {
    return (
        <div>
            <img src={photo.src.landscape} alt={photo.alt} loading="lazy" />
            <div>
                <div>
                    <div>{photo.alt}</div>
                    <hr />
                    <div>{photo.photographer}</div>
                </div>
            </div>
        </div>
    );
}
