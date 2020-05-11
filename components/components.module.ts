import { NgModule } from '@angular/core';

// modules 
import { CommonModule } from '@angular/common';


//componentes
import { FormErrorComponent } from './form-error/form-error.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormImgComponent } from './form-img/form-img.component';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FormErrorComponent,
        PaginationComponent,
        FormImgComponent,
    ],    
    exports: [
        FormErrorComponent,
        PaginationComponent,
        FormImgComponent,
    ]
})
export class ComponentsModule {}
