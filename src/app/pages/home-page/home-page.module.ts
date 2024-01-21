import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ListRestaurantComponent } from 'src/app/shared/component-shared/list-restaurant/list-restaurant.component';
import { RestaurantCardComponent } from 'src/app/shared/component-shared/restaurant-card/restaurant-card.component';
import { CuisinesSliderComponent } from './cuisines-slider/cuisines-slider.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeComponent } from './home/home.component';
import { PromoSliderComponent } from './promo-slider/promo-slider.component';
import { RestaurantSliderComponent } from './restaurant-slider/restaurant-slider.component';
import { SearchLocationComponent } from './search-location/search-location.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Giao đồ ăn trực tuyến'
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    SearchLocationComponent,
  ],
  imports: [
    CommonModule,
    HomeSliderComponent,
    TranslateModule,
    RestaurantCardComponent,
    ListRestaurantComponent,
    CuisinesSliderComponent,
    PromoSliderComponent,
    RestaurantSliderComponent,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
