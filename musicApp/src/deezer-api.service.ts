import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeezerArtist, DeezerAlbum, DeezerTrack } from './deezer-interfaces';


@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private deezerApiUrl = 'https://api.deezer.com';


  constructor(private http: HttpClient) { }

  searchArtists(query: string): Observable<any> {
    const url = `${this.deezerApiUrl}/search/artist?q=${query}`;
    return this.http.get<{ data: DeezerArtist[] }>(url).pipe(map(response => response.data));
  }
  getAlbums(artistId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/artist/${artistId}/albums`;
    return this.http.get<{ data: DeezerAlbum[] }>(url).pipe(map(response => response.data));
  }

  getTracks(albumId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/album/${albumId}/tracks`;
    return this.http.get<{ data: DeezerTrack[] }>(url).pipe(map(response => response.data));
  }
}

