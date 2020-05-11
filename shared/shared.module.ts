import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NoPageFoundComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NoPageFoundComponent,
    ]
})
export class SharedModule {}
