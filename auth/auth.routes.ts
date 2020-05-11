
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';


const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

export const AUTH_ROUTES = RouterModule.forChild( authRoutes );
