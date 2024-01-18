import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  filter: any = {};
  carts: any = [];
  model: any = {
    cartIDs: [],
    orderType: 'Dinning'
  }
  totalAmount: number = 0
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private route: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.search()
  }

  search() {
    this.cartService.search(this.filter).subscribe((data: any) => {
      this.carts = data.data
      this.currentCart()
    })
  }

  delete(id: any) {
    this.cartService.delete(id).subscribe((data: any) => {
        this.ionViewWillEnter()
    })
  }
  
  currentCart() {
    this.totalAmount = 0;
    this.model.cartIDs = []
    this.carts.forEach((data: any) => {
      this.totalAmount += data?.itemID?.amount
      this.model?.cartIDs.push(data?._id)
    })
  }
 
  async checkout() {
    const userInfo =  await this.authService.userInfo();
    this.model.userID = userInfo._id
    this.orderService.create(this.model).subscribe((data: any) => {
      this.ionViewWillEnter();
      this.route.navigate(['/tabs/order']);
    })
  }

  goBack() {
    return this.navCtrl.back();
  }

}
