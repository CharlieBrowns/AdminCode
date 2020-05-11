import { NgModule } from '@angular/core';

// modules 
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// RUTAS
import { AUTH_ROUTES } from './auth.routes';

//vistas
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormErrorComponent } from '../components/form-error/form-error.component';

//vistas



@NgModule({
    imports: [
        CommonModule,
        AUTH_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ContactComponent,
        HelpComponent,
        // FormErrorComponent

    ],
})
export class AuthModule {}
