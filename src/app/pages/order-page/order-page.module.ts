import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CreateReviewComponent } from 'src/app/shared/component-shared/create-review/create-review.component';
import { MapComponent } from 'src/app/shared/component-shared/map/map.component';
import { NotificationComponent } from 'src/app/shared/component-shared/notification/notification.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderStatusTrackerComponent } from './order-status-tracker/order-status-tracker.component';
const routes: Routes = [
  {
    path: 'history',
    component: OrderHistoryComponent,
    title: 'Order history'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Trang thanh toán đơn hàng online'
  },
  {
    path: 'tracker',
    component: OrderStatusTrackerComponent,
    title: 'Theo dõi đơn hàng'
  }
];

const plugins = [
  NzPopoverModule,
  NzCheckboxModule,
  NzModalModule,
  MapComponent,
  NotificationComponent,
  CreateReviewComponent
];
@NgModule({
  declarations: [
    CheckoutComponent,
    OrderHistoryComponent,
    CampaignsComponent,
    OrderStatusTrackerComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    RouterModule.forChild(routes),
    plugins
  ]
})
export class OrderPageModule { }
