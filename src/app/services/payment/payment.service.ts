import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseURL = 'https://ecommerce-9hcx.onrender.com/payment'
  constructor(
    private http: HttpClient
  ) { }

  createPaymentOrder(payload: any) {
    let url  = this.baseURL;
    return this.http.post(url,payload);
  }

  updatePaymentOrder(id: any,payload: any) {
    let url:any =  this.baseURL + `/${id}`;
    return this.http.put(url,payload)
  }

}
