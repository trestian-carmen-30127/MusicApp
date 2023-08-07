import { Component, OnInit } from '@angular/core';
import { DeezerApiService } from '../../deezer-api.service';
import { AppRoutingService } from '../app-routing.service';

import { DeezerArtist } from '../../deezer-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public searchArtistForm = new FormGroup({
    'artistName': new FormControl('', Validators.required)
  }
  )

  searchQuery: string = '';
  artists: DeezerArtist[] = [];

  constructor(private deezerApiService: DeezerApiService, public routingService: AppRoutingService) { }

  public ngOnInit() {
    this.searchArtistForm.controls.artistName.valueChanges.pipe(
      switchMap((inputValue: string | null) => this.deezerApiService.searchArtists(inputValue ?? ''))
    ).subscribe((artists: DeezerArtist[]) => {
      this.artists = artists;
    });
  }

  /*onSearchInput(event: Event): void {
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
