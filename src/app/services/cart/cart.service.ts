import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/cart"; 
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

  delete(id: any) {
    let url = this.baseUrl + '/' + id
    return this.http.delete(url)
  }

  setDeliveyUpdate(query: any,input: any)   {
    let url  = this.baseUrl +'/'+ query.id+'/'+query.userID;
    return this.http.put(url,input)
  }
}
