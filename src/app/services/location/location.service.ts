import { Injectable, OnInit } from '@angular/core';
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class LocationService implements OnInit {
  constructor(
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    
  }

  setLocation(value: string) {
    this.storageService.set('location',value)
  }

  getLocation() {
     return this.storageService.get('location')
  }

}
