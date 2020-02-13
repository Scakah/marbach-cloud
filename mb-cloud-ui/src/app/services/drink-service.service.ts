import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { drink } from '../models/drink';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {

  public backendurl
    = '127.0.0.1:7000/drinks';

  constructor(private http: HttpClient) { }

  public getDrinks(): Observable<any> {
    return this.http.get(this.backendurl);
  }
------------############
  public addDrinks(newdrink: drink): void {
  this.http.post(this.backendurl + '/add', newdrink);
}

}
