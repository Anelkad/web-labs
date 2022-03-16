import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albom } from '../alboms';
import { Location } from '@angular/common';
import { AlbomsService } from '../alboms.service';


@Component({
  selector: 'app-albom-detail',
  templateUrl: './albom-detail.component.html',
  styleUrls: ['./albom-detail.component.css']
})
export class AlbomDetailComponent implements OnInit {

  declare albom: Albom;
  declare loaded: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albomService: AlbomsService) {}

  ngOnInit(): void {
    this.getAlbom();
  }
  
  getAlbom(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.loaded=false;
    this.albomService.getAlbom(productIdFromRoute).subscribe(
      (albom)=>{
        this.albom=albom;
        this.loaded=true;}
    );
  }
  updateAlbom(){
    this.albomService.updateAlbom(this.albom).subscribe((albom)=>
    {console.log(albom);
    this.loaded=true;})
  }
  goBack(){
      this.location.back();
  }
}
