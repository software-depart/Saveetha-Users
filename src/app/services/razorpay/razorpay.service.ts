import { Injectable } from '@angular/core';
import { Checkout } from 'capacitor-razorpay';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor() { }

  async pay(amount: number,orderId: any) {
    const options:any = {
      key: 'rzp_test_RYiNcQTl9tHDiP',
      amount: amount,
      order_id: orderId,
      description: 'Great offers',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      name: 'Saveetha',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191'
      },
      theme: {
        color: '#3399cc'
      }
    }

    try {
      let data:any = (await Checkout.open(options));
      return data;
    } catch (error) { 
        console.log('error::',error);
    }
  }
}
