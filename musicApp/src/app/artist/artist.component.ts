import { Component } from '@angular/core';
import { DeezerApiService } from '../../deezer-api.service';
import { Router } from '@angular/router';

import { DeezerArtist } from '../../deezer-interfaces';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  searchQuery: string = '';
  artist: DeezerArtist[] = [];

  constructor(private deezerApiService: DeezerApiService, private router: Router) { }


  onSearchInput(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.searchArtists();
  }

  searchArtists(): void {
    if (this.searchQuery.trim() == '') {
      this.artist = [];
      return;
    }

    this.deezerApiService.searchArtists(this.searchQuery).subscribe(
      (respone) => { this.artist = respone.data; },
      (error) => { console.error('Error fetching artists:', error); }
    );


  }
  goToAlbumList(artistId: number): void {
    this.router.navigate(['/albums', artistId]);
  }
}
