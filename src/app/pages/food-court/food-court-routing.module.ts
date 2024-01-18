import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCourtPage } from './food-court.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCourtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCourtPageRoutingModule {}
