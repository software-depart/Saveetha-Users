import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  toggle: boolean = false;
  selection: any = ''
  constructor(
    private locationService: LocationService,
    private router: Router,
    // private storageService: StorageService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    // this.isUserLogin();
  }

  // async isUserLogin() {
  //   this.storageService.get('accessToken').subscribe((data: any) => {
  //     if(data) {
  //       this.router.navigate(['/tabs/home']);
  //     } else {
  //       this.router.navigate(['/login'])
  //     }
  //   })
  // }

  setLocation() {
    this.locationService.setLocation(this.selection); 
    this.router.navigate(['/login']);
  }
}
