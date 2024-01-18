import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedPipesModule } from 'src/app/pipes/shared-pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule,
    LazyLoadImageModule,
    SharedPipesModule
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule {}
