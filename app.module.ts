import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas 
import { APP_ROUTES } from './app.route';


//servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modulos
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
