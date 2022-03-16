import { Component, OnInit } from '@angular/core';
import { Albom } from '../alboms';
import { AlbomsService } from '../alboms.service';

@Component({
  selector: 'app-alboms',
  templateUrl: './alboms.component.html',
  styleUrls: ['./alboms.component.css']
})
export class AlbomsComponent implements OnInit {
  declare alboms: Albom[];
  declare newAlbom: string;
  declare loaded: boolean;

  constructor(private albomsService: AlbomsService) { 
    this.newAlbom = '';
  }

  ngOnInit(): void {
    this.getAlboms();
  }

  getAlboms(){
    this.loaded = false;
    this.albomsService.getAlboms().subscribe(
      (alboms)=>{this.alboms=alboms;this.loaded = true;}
    );
  }
  
  addAlbom(){
    this.loaded = false;
    const albom = {
      title: this.newAlbom
    };

    this.albomsService.addAlbom(albom as Albom).subscribe((albom)=>{
      this.alboms.unshift(albom);
      console.log(albom);
      this.newAlbom='';
      this.loaded = true;
    });
  }

  deleteAlbom(id: number){
    this.alboms = this.alboms.filter((x)=>x.id!==id);
    this.albomsService.deleteAlbom(id).subscribe(()=>{
        console.log('deleted',id);
      });
  }


}
