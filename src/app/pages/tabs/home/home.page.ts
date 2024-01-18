import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SearchService } from 'src/app/services/search/search.service';
import { BannerService } from 'src/app/services/banner/banner.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { RestaurantsService } from 'src/app/services/restaurants/restaurants.service';
import {Swiper} from 'swiper';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  filter: any = { limit: 5 }
  results: any = []
  searchKey: any = ''
  spinner: boolean = false
  banners: any = [];
  categories: any = [];
  restaurants: any = [];
  constructor(
    private searchService: SearchService,
    private bannerService: BannerService,
    private categoryService: CategoryService,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
    this.searchBanner()
    this.searchCategory()
    this.searchRestaurants()
  }

  search(event: any) {
    this.spinner  = true
    if(event?.detail.value) {
      this.searchService.search({ search: event?.detail.value}).subscribe((data: any) => {
        this.results = data.data
        this.spinner  = false
       })
    }
  }

  clear() {
    this.results = []
  }

  searchCategory() {
    this.categoryService.search(this.filter).subscribe((data: any) => {
      this.categories = data.data
    })
  }

  searchRestaurants() {
    this.restaurantService.search(this.filter).subscribe((data: any) => {
      this.restaurants = data.data
    })
  }

  searchBanner() {
    this.bannerService.search(this.filter).subscribe((data: any) => {
      this.banners = data.data
    })
  }
}
