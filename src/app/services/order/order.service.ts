import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/order"
  constructor(
    private http: HttpClient
  ) { }

  create(input: any)   {
    let url  = this.baseUrl;
    return this.http.post(url,input)
  }

  search(params: any = {}) {
    let url = this.baseUrl;
    return this.http.get(url,{
      params: params
    })
  }
}
