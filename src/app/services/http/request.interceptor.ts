import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, switchMap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { ToastController } from '@ionic/angular';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    whiteUrls = ['login','register']
    constructor(
        private authService: AuthService,
        private toastController: ToastController
    ) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //Don't need authentication
        if(this.whiteUrls.find((data: any) => request.url.includes(data))) {
         return  next.handle(request)
        }   
       
        return from(this.authService.getToken('accessToken')).pipe(
            switchMap((access_token: any) => { 
                request = request.clone({
                    setHeaders: {
                      'Authorization': `Bearer ${access_token}`
                    }
                })
                return next.handle(request)
            }
        ));
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 3000,
          position: 'top',
          color: 'success',
        });
        toast.present();
    }
    
}