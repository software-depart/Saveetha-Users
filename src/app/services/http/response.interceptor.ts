import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { ToastController } from '@ionic/angular';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private toastController: ToastController) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        // .pipe(
        //     tap((event) => {
        //         if(event instanceof HttpResponse && [200,201].includes(event.status)) {
        //             this.presentToast('success',`${event.body.message}`)
        //         }
        //     }),
        //     catchError((error: any) => {
        //         if (error instanceof HttpErrorResponse) {
        //            if([400,404,500].includes(error.error.code)) {
        //                 if(error.error.error.message != 'Token is expired') {
        //                     this.presentToast('danger',`${error.error.message}`);
        //                 }
        //             } else if(error.error.code != 401){
        //                 //network issue
        //                 this.presentToast('danger','Something Wrong') 
        //             }
        //         }  
        //         return throwError(error);
        //     })
        // )
    }

    async presentToast(color: string,message: string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 3000,
          position: 'top',
          color: color,
        });
        toast.present();
    }
}