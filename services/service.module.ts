import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './service.index';
import { FoodsService } from './foods.service';
import { OrderService } from './order.service';

import { LoginGuard } from './guards/login.guard';
// import { AuthInterceptorService } from './guards/auth-interceptors';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        UserService,
        FoodsService,
        LoginGuard,
        OrderService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: AuthInterceptorService,
        //     multi: true
        // },
    ],
    declarations: []
})
export class ServiceModule {}
