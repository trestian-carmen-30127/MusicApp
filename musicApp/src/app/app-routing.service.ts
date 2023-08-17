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
        this.router.navigate(['/album', artistId]);
    }

    goToTrackList(albumId: number): void {
        this.router.navigate(['/track', albumId]);
    }
}