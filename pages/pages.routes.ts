
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { FoodsComponent } from './foods/foods.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReportsComponent } from './reports/reports.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginGuard } from '../services/service.index';

const pagesRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'foods', component: FoodsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
