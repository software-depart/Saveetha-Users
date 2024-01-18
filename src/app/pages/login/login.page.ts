import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model: any = {}
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

 async ngOnInit() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });  
  }

  login(form: NgForm) {
    if(!form.invalid) {
      this.authService.login(this.model).subscribe((data: any) => {
        this.router.navigate(['/food-court']);
      })
    } 
  }

}
