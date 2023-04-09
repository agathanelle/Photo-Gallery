const PexelsAPIUrl = 'https://api.pexels.com';
const PexelsAPIKey = 'ZgRu4ZmqXADuks9QidbPiCN6OoMIurqO6j7u1a3ZSiINaKIRrhtJM93M';
const queryValue = 'nature';
const perPageValue = 10;

// eslint-disable-next-line import/no-unused-modules
export const fetchPhotos = {
    method: "GET",
    url: `${PexelsAPIUrl}/v1/search?per_page=${perPageValue}&query=${queryValue}`,
    headers:{
        Authorization: PexelsAPIKey
    }
};