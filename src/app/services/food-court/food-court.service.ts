import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class FoodCourtService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/food-court"
  constructor(
    private http: HttpClient,
    public storageService: StorageService
  ) { }

  search(params: any = {}) {
    let url = this.baseUrl
    return this.http.get(url,{
      params: params
    })
  }

  setFoodCourt(value: string) {
    this.storageService.set('foodCourt',value)
  }
}
