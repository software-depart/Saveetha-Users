import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantMenuPageRoutingModule } from './restaurant-menu-routing.module';

import { RestaurantMenuPage } from './restaurant-menu.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantMenuPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [RestaurantMenuPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantMenuPageModule {}
