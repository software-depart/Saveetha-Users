import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/user"
  constructor(
    private http: HttpClient
  ) { }

  get(id: any)  {
    let url = this.baseUrl + '/' + id
    return this.http.get(url)
  }
}
