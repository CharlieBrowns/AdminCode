import { NgModule } from '@angular/core';

// modules 
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

//vistas
import { WelcomeComponent } from './welcome/welcome.component';
import { FoodsComponent } from './foods/foods.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReportsComponent } from './reports/reports.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        PAGES_ROUTES,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        WelcomeComponent,
        FoodsComponent,
        OrdersComponent,
        StatisticsComponent,
        ReportsComponent,
        RestaurantComponent,
        
    ],
    exports: [
    ]
})
export class PagesModule {}
