import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

import { ItemDetailsPage } from './item-details.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [ItemDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsPageModule {}
