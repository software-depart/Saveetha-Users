import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';
// import { SplashScreen } from '@capacitor/splash-screen';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private storageService: StorageService,
    private router: Router,
  ) {}

  canLoad():any{
    this.storageService.get('accessToken').subscribe(async (data: any) => {
      if(data) {
        return true;
      } else {
        this.router.navigate(['/login'])
        return false;
      }
    })
  }
}
