import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeezerArtist, DeezerAlbum, DeezerTrack } from './deezer-interfaces';
import { Request, Response, NextFunction } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private deezerApiUrl = 'https://api.deezer.com';

  public httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  searchArtists(query: string): Observable<any> {
    const url = `${this.deezerApiUrl}/search/artist?q=${query}`;
    return this.http.get<any>(url, { headers: this.httpHeaders }).pipe(map(response => response.data));
  }



  getAlbums(artistId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/artist/${artistId}/albums`;
    return this.http.get<any>(url, { headers: this.httpHeaders }).pipe(map(response => response.data));
  }

  getTracks(albumId: number): Observable<any> {
    const url = `${this.deezerApiUrl}/album/${albumId}/tracks`;
    return this.http.get<any>(url).pipe(map(response => response.data));
  }
}

