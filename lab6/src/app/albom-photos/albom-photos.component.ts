import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbomsService } from '../alboms.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-albom-photos',
  templateUrl: './albom-photos.component.html',
  styleUrls: ['./albom-photos.component.css']
})
export class AlbomPhotosComponent implements OnInit {


  declare photos: Photo[];
  declare loaded: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albomService: AlbomsService) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(){
    this.loaded = false;
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.albomService.getPhotos(productIdFromRoute).subscribe(
      (photos)=>{
        this.photos=photos;
        this.loaded=true;}
    );
  }
  goBack(){
    this.location.back();
}
}
