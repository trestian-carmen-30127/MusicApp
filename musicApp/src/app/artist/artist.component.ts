import { Component } from '@angular/core';
import { DeezerApiService } from '../../deezer-api.service';
import { AppRoutingService } from '../app-routing.service';

import { DeezerArtist } from '../../deezer-interfaces';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  searchQuery: string = '';
  artists: DeezerArtist[] = [];

  constructor(private deezerApiService: DeezerApiService, public routingService: AppRoutingService) { }


  /* onSearchInput(event: Event): void {
     this.searchQuery = (event.target as HTMLInputElement).value;
     this.searchArtists();
   }*/

  searchArtists(): void {
    if (this.searchQuery.trim() == '') {
      this.artists = [];
      return;
    }

    this.deezerApiService.searchArtists(this.searchQuery).subscribe(
      (respone) => { this.artists = respone.data; },
      (error) => { console.error('Error fetching artists:', error); }
    );


  }
  goToAlbumList(artistId: number): void {
    this.routingService.goToAlbumList(artistId);
  }
}
