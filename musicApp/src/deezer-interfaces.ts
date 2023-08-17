export interface DeezerArtist {
    id: number;
    name: string;
    picture_medium: string;
    nb_album: number;
    nb_fan: number;
}

export interface DeezerAlbum {
    id: number;
    title: string;
    cover_medium: string;
    release_date: Date;
}

export interface DeezerTrack {
    id: number;
    title: string;
    preview: string;
}