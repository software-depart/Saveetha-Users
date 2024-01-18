import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/search"

  constructor(
    private http: HttpClient
  ) { }

  search(params: any) {
    let url = this.baseUrl + '/user'
    return this.http.get(url,{
      params: params
    })
  }
}
