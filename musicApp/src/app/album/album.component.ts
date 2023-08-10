import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeezerApiService } from '../../deezer-api.service';
import { DeezerAlbum } from '../../deezer-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public getAlbumForm = new FormGroup({
    'albumName': new FormControl('', Validators.required)
  }
  )

  artistId: number = 0;
  albums: DeezerAlbum[] = [];

  constructor(private route: ActivatedRoute, private deezerApiService: DeezerApiService) { }

  public ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.artistId = Number(params.get('id'));
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
