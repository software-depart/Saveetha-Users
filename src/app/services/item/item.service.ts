import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/item"
  constructor(
    private http: HttpClient
  ) { }

  search(params: any = {}) {
    let url = this.baseUrl;
    return this.http.get(url,{
      params: params
    })
  }

  get(id: any) {
    let url = this.baseUrl+'/' + id;
    return  this.http.get(url)
  }
}
