export type PhotoType =
{
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    avg_color: string;
    src: {
        original: string;
        large: string;
        large2x: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    liked: boolean;
    alt: string;
};

export type APIResponse =
{
    photos: PhotoType[];
    page: number;
    per_page: number;
    total_results: number;
    prev_page?: string;
    next_page?: string;
    
}
