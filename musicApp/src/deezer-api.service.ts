import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private deezerApiUrl = 'https://api.deezer.com';


  constructor(private http: HttpClient) { }

  searchArtists(query: string): Observable<any> {
    const url = `${this.deezerApiUrl}/search/artist?q=${query}`;
    return this.http.get<any>(url);
  }
  getArtistAlbums(artistId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/artist/${artistId}/albums`;
    return this.http.get<any>(url);
  }

  getAlbumTracks(albumId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/album/${albumId}/tracks`;
    return this.http.get<any>(url);
  }
}
