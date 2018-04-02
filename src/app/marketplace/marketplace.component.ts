import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService],
  animations: [
    trigger('albumState', [
      state('inactive', style({
        backgroundColor: 'red',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'blue',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-in'))
    ])
  ]
})


export class MarketplaceComponent implements OnInit {
  
  albums: Album[];

  constructor(private router: Router, private albumService: AlbumService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  }


}
