import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants/restaurants.service';
register();

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.page.html',
  styleUrls: ['./restaurant-menu.page.scss'],
})
export class RestaurantMenuPage implements OnInit {
  public categories: any = []
  public restaurant: any = {}
  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
    if(this.router.snapshot.paramMap.get('id')) {
      let  restaurantId = this.router.snapshot.paramMap.get('id')
      this.get(restaurantId)
      this.getItem(restaurantId)
    };
  }
 
  getItem(id: any) {
    this.restaurantService.getItem(id).subscribe((data: any) => {
      this.categories = data.data
    })
  }

  get(id: any) {
    this.restaurantService.get(id).subscribe((data: any) => {
      this.restaurant = data.data
    })
  }

}
