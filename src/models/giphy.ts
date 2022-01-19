export interface GiphyModel {
    data: Giphy[];
}

export interface Giphy {
    id: string;
    title: string;
    url: string;
    images: Images;
}

export interface Images {
    original: Original;
}

export interface Original {
    url: string;
}