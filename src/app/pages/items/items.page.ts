import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  filter: any = {};
  items: any = []
  constructor(
    private itemService: ItemService,
    private router: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    if(this.router.snapshot.paramMap.get('id')) {
      this.filter.subcategoryID = this.router.snapshot.paramMap.get('id')
      this.search()
    }
  }

  search() {
    this.itemService.search(this.filter).subscribe((data: any) => {
      this.items = data.data
    })
  }

  goBack() {
    return this.navCtrl.back();
  }

}
