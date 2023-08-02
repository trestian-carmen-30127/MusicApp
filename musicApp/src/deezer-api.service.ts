import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DeezerArtist {
  id: number;
  name: string;
  picture_mediun: string;
  nb_album: number;
  nb_fans: number;
}

export interface DeezerAlbum {
  id: number;
  title: string;
  cover_medium: string;
  releade_date: Date;
}

export interface DeezerTrack {
  id: number;
  title: string;
  preview: string;
}
//import { DeezerArtist } from '../deezer-interfaces';
//import { DeezerAlbum } from '../deezer-interfaces';
//import { DeezerTrack } from '../deezer-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private deezerApiUrl = 'https://api.deezer.com';


  constructor(private http: HttpClient) { }

  searchArtists(query: string): Observable<any> {
    const url = `${this.deezerApiUrl}/search/artist?q=${query}`;
    return this.http.get<{ data: DeezerArtist[] }>(url);
  }
  getAlbums(artistId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/artist/${artistId}/albums`;
    return this.http.get<{ data: DeezerAlbum[] }>(url);
  }

  getTracks(albumId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/album/${albumId}/tracks`;
    return this.http.get<{ data: DeezerTrack[] }>(url);
  }
}

