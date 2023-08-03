import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppRoutingService {

    constructor(private router: Router) { }

    goToArtistList(): void {
        this.router.navigate(['/']);
    }

    goToAlbumList(artistId: number): void {
        this.router.navigate(['/albums', artistId]);
    }

    goToTrackList(albumId: number): void {
        this.router.navigate(['/tracks', albumId]);
    }
}