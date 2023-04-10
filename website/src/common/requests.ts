/* eslint-disable import/no-unused-modules */
const PexelsAPIUrl = 'https://api.pexels.com';
const PexelsAPIKey = 'ZgRu4ZmqXADuks9QidbPiCN6OoMIurqO6j7u1a3ZSiINaKIRrhtJM93M';
const queryValue = 'nature';
const perPageValue = 10;

export type FetchPhotos = {
    method: string;
    url: string;
    headers: {
      Authorization: string;
    };
  }

export const fetchPhotos: FetchPhotos = {
    method: "GET",
    url: `${PexelsAPIUrl}/v1/search?per_page=${perPageValue}&query=${queryValue}`,
    headers:{
        Authorization: PexelsAPIKey
    }
};