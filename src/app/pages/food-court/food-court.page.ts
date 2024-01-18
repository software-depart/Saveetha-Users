import { Component, OnInit } from '@angular/core';
import { FoodCourtService } from 'src/app/services/food-court/food-court.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-court',
  templateUrl: './food-court.page.html',
  styleUrls: ['./food-court.page.scss'],
})
export class FoodCourtPage implements OnInit {
  foodCourts:any = []
  filter: any = {}
  constructor(
    private foodCourtService: FoodCourtService,
    private router: Router
  ) { }

  ngOnInit() {
    this.search()
  }

  search() {
    this.foodCourtService.search({}).subscribe((data: any) => {
      this.foodCourts = data.data
    })
  }

  setFoodCourt(_id: string) {
    this.foodCourtService.setFoodCourt(_id)
    this.router.navigate(['/tabs/home']);
  }
}
