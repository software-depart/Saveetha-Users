import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantsService } from 'src/app/services/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  filter: any = {}
  restaurants: any = []
  constructor(
    private restaurantsService: RestaurantsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.searchRestaurants()
  }

  searchRestaurants() {
    this.restaurantsService.search(this.filter).subscribe((data: any) =>{
      this.restaurants = data.data
    })
  }

  goBack() {
    return this.navCtrl.back();
  }

}
