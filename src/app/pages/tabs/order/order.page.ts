import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  query: any = {}
  filter:any = {}
  orders: any = []
  scanActive: boolean = false;
  constructor(
    private orderService: OrderService,
    private alertController: AlertController,
    private cartService: CartService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // this.search()
  }

  ionViewWillEnter() {
    this.search()
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.search()
      event.target.complete();
    }, 2000);
  }

  search() {
    this.orderService.search(this.filter).subscribe((data: any) => {
      this.orders = []
      if(data.data) {
        data.data.forEach((data: any) => {
          this.orders.push(data.cartIDs);
        })
      }
      this.orders = this.orders.flat()
    })
  }

  async startScan(id: any) {
    const allowed = await this.checkPermission();
    if(allowed) {
      this.scanActive = true
      document.querySelector('body')?.classList.add('footer')
      const result = await BarcodeScanner.startScan();
      if(result.hasContent) {
        this.query = {
          id: id,
          userID: result.content
        }
        this.scanActive = false
        this.setDelivery();
        this.stopScanner();
      }
    } 
  }

  async checkPermission() {
    return new Promise(async (resolve,reject) => {
      const status = await BarcodeScanner.checkPermission({force: true});
      if(status.granted) {
        resolve(true)
      } else if(status.denied) {
        const alert =  await this.alertController.create({
          header: 'No Permission',
          message: 'Please allow camera access in your settings',
          buttons: [
            {
              text: 'No',
              role: 'Cancel'
            },
            {
              text: 'Open Settings',
              handler: () => {
                BarcodeScanner.openAppSettings();
                resolve(false);
              }
            }
          ]
        })
      }
    })
  }

  async stopScanner() {
    await BarcodeScanner.stopScan()
    this.scanActive = false
    document.querySelector('body')?.classList.remove('footer')
  }

  setDelivery() {
    this.cartService.setDeliveyUpdate(this.query,{status: 'Delivered'}).subscribe((data: any) => {
      this.ionViewWillEnter()
      this.successToaster()
    })
  }

  async successToaster() {
    const toast = await this.toastController.create({
      message: 'Delivered Successfully!',
      duration: 3000,
      color: 'success', 
      position: 'top',
    });

    toast.present();
  }

}
