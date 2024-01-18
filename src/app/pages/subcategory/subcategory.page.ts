import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  filter: any = {}
  subCategories: any = []
  constructor(
    private router: ActivatedRoute,
    private subcategoryService: SubcategoryService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    if(this.router.snapshot.paramMap.get('id')) {
      this.filter.categoryId = this.router.snapshot.paramMap.get('id')
      this.search()
    }; 
  }

  search() {
    this.subcategoryService.search(this.filter).subscribe((data:any) => {
      this.subCategories = data.data
    })
  }

  goBack() {
    return this.navCtrl.back();
  }
}
