import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodCourtPageRoutingModule } from './food-court-routing.module';

import { FoodCourtPage } from './food-court.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodCourtPageRoutingModule
  ],
  declarations: [FoodCourtPage]
})
export class FoodCourtPageModule {}
