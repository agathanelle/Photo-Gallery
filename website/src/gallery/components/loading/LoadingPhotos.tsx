/* eslint-disable import/no-unused-modules */

export default function LoadingPhotos({ photoCount }: { photoCount: number }) {
  if (!photoCount || photoCount < 1) {
    return (
      <div className="photo-container">
        {Array.from({ length: photoCount }).map(() => (
          <div className="photo skeleton photo-size"></div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
