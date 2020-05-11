import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/service.index';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        // canActivate: [LoginGuard],
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NoPageFoundComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );