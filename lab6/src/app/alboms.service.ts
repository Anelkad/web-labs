import { Injectable } from '@angular/core';
import { Albom } from './alboms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbomsService {
  declare alboms: Albom[];
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private Client: HttpClient) { 
  }

  getAlboms(): Observable <Albom[]>{
    return this.Client.get<Albom[]>(`${this.BASE_URL}/albums`);
  }

  getAlbom(id: number): Observable<Albom>{
    return this.Client.get<Albom>(`${this.BASE_URL}/albums/${id}`);
  }

  getPhotos(id: number): Observable<Photo[]>{
    return this.Client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }


  deleteAlbom(id: number): Observable<any> {
      return this.Client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbom(albom: Albom): Observable<Albom>{
      return this.Client.put<Albom>(`${this.BASE_URL}/albums/${albom.id}`,albom);
  }

  addAlbom(albom: Albom): Observable<Albom>{
    return this.Client.post<Albom>(`${this.BASE_URL}/albums`,albom);
  }
}
