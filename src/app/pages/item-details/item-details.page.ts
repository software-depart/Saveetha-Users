import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ItemService } from 'src/app/services/item/item.service';
import { NavController } from '@ionic/angular';
register();

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  filter: any = {
    limit: 4
  }
  carts: any = []
  categories: any = []
  model: any = {}
  itemDetails: any = {}
  constructor(
    private router: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private authService: AuthService,
    private cartService: CartService,
    private route: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    if(this.router.snapshot.paramMap.get('id')) {
      this.model.itemID = this.router.snapshot.paramMap.get('id')
      this.getItem(this.model.itemID)
      this.searchCategory()
      this.searchCart()
    }; 
  }

  getItem(id: any) {
    this.itemService.get(id).subscribe((data: any) => {
      this.itemDetails = data.data
    })
  }

  searchCategory() {
    this.categoryService.search(this.filter).subscribe((data: any) => {
      this.categories = data.data
    })
  }

  searchCart() {
    this.cartService.search(this.filter).subscribe((data: any) => {
      this.carts = data.data
    })
  }
  
  async addToCart() {
    const userInfo =  await this.authService.userInfo();
    this.model.userID = userInfo._id
    this.cartService.create(this.model).subscribe((data: any) => {
      this.searchCart()
    })
 }

 goBack() {
   return this.navCtrl.back();
 }
}
