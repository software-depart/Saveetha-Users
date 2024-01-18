import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { RazorpayService } from 'src/app/services/razorpay/razorpay.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild('addMoney') addMoneyModal: any;
  public userDetails: any = {}
  public model: any = {}
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private paymentService: PaymentService,
    private razorpay: RazorpayService,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    const userInfo =  await this.authService.userInfo();
    this.model.userId = userInfo._id
    this.getUser(this.model.userId)
  }

  getUser(id: any) {
    this.userService.get(id).subscribe((data: any) => {
      this.userDetails = data.data
    })
  }

  openModal() {
    if (this.addMoneyModal) {
      this.addMoneyModal.present();
    }
  }

  addWallet() {
    if (this.addMoneyModal) {
      this.addMoneyModal.dismiss();
      this.model.amount = this.model.amount * 100;
      this.paymentService.createPaymentOrder(this.model).subscribe(async (data: any) => {
        if(data.data) {
          let payment = await this.razorpay.pay(data.data.amount,data.data.razorpayOrderId) 
          if(payment.response) {
            let input = {
              razorpayOrderId: payment.response.razorpay_order_id,
              userId: this.model.userId
            }
            this.paymentService.updatePaymentOrder(data.data._id,input).subscribe((data: any) => {
              this.successToaster()
              this.ngOnInit()
              delete this.model.amount;
            })  
          }
        }
      })
    }
  }

  async successToaster() {
    const toast = await this.toastController.create({
      message: 'Payment Added successfully!',
      duration: 3000,
      color: 'success', 
      position: 'top',
    });

    toast.present();
  }

}
