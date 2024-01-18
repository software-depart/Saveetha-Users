import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren:() => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'location',
    loadChildren:() => import('./pages/location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'food-court',
    loadChildren:() => import('./pages/food-court/food-court.module').then(m => m.FoodCourtPageModule)

  },
  {
    path: 'tabs',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
  },
  {
    path: 'subcategory/:id',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'items/:id',
    loadChildren: () => import('./pages/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
