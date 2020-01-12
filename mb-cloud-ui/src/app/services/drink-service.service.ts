import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {

  public backendurl = '127.0.0.1:7000/drinks';

  constructor( private http: HttpClient) { }

  getDrinks() {
    return this.http.get(this.backendurl);
  }
}
