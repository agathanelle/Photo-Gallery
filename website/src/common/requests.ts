export const PexelsAPIUrl = "https://api.pexels.com";
export const PexelsAPIKey = 'ZgRu4ZmqXADuks9QidbPiCN6OoMIurqO6j7u1a3ZSiINaKIRrhtJM93M';

export default function fetchPhotos<APIResponse>(query:string, per_page:number, page?:number): Promise<APIResponse> {
    return fetch(`${PexelsAPIUrl}/v1/search?per_page=${per_page}&query=${query}&page=${page}`, {
      headers: {
          Authorization: PexelsAPIKey
        },
      }).then((response)=>response.json()).then((data)=>data as APIResponse);

}
