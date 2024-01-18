import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any = "https://ecommerce-9hcx.onrender.com/auth"
  constructor(
    private  storageService: StorageService,
    private http:HttpClient
  ) { }

  login(input: any) {
    let url = this.baseUrl + '/login'
    return this.http.post(url,input).pipe(
      map((data: any) => { 
        this.storageService.set('accessToken',data.data.accessToken);
        this.storageService.set('refreshToken',data.data.refreshToken);
        this.storageService.set('userInfo',JSON.stringify(data.data.userInfo))
        return data
      })
    )
  }

  getToken(key: any) {
    return this.storageService.get(key)
  }

  async validateToken() {
    let key = 'refreshToken';
    let token = await this.storageService.getValue(key);
    try {
      if (await this.tokenExpired(token)) {
        return true
      } else {
        return false
      }
    } catch(err) {
      return err;
    }
  }

  async getTokenFromServices(key: string) {
    return this.storageService.getValue(key);
  }

  async tokenExpired(token: any): Promise<any> {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    if (Math.floor(new Date().getTime() / 1000) >= expiry) {
      return true;
    } else {
      return false;
    }
  }
  
  async userInfo() {
    let userInfo = await this.storageService.userInfo()
    return JSON.parse(userInfo)
  }
}
