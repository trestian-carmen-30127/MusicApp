import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeezerApiService } from '../../deezer-api.service';
import { DeezerAlbum } from '../../deezer-interfaces';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  artistId: number;
  albums: DeezerAlbum[] = [];

  constructor(private route: ActivatedRoute, private deezerApiService: DeezerApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.artistId = Number(params.get('artistId'));
      this.getArtistAlbums();
    });
  }

  getArtistAlbums(): void {
    this.deezerApiService.getAlbums(this.artistId).subscribe(
      (response) => { this.albums = response; },
      (error) => { console.error('Error fetching albums:', error); }
    );
  }
}
