import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DeezerApiService } from '../../deezer-api.service';
import { DeezerTrack } from '../../deezer-interfaces';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  albumId: number = 0;
  tracks: DeezerTrack[] = [];

  constructor(private route: ActivatedRoute, private deezerApiService: DeezerApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.albumId = Number(params.get('id'));
      this.getAlbumTracks();
    });
  }

  getAlbumTracks(): void {
    this.deezerApiService.getTracks(this.albumId).subscribe(
      (response) => { this.tracks = response; },
      (error) => { console.error('Error fetching tracks:', error); }
    );
  }
}
