import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: any =  "https://ecommerce-9hcx.onrender.com/category"
  constructor(
    private http:HttpClient
  ) { }

  search(params: any = {}) {
    let url = this.baseUrl;
    return this.http.get(url,{
      params: params
    })
  }
}
