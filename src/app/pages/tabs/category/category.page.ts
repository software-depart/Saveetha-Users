import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  filter: any = {
    limit: 10
  }
  categories: any = [];
  constructor(
    private categoryService: CategoryService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.searchCategory()
  }

  searchCategory() {
    this.categoryService.search(this.filter).subscribe((data: any) => {
      this.categories = data.data
    })
  }

  goBack() {
    return this.navCtrl.back();
  }

}
