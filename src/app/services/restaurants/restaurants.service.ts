import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/restaurant"
  constructor(
    private http: HttpClient
  ) { }

  search(params: any = {}) {
    let url = this.baseUrl;
    return this.http.get(url,{
      params: params
    })
  }

  getItem(id: any) {
    let url = this.baseUrl +'/' + id +'/item';
    return this.http.get(url);
  }

  get(id: any) {
    let url = this.baseUrl + '/' + id;
    return this.http.get(url);
  }
}
