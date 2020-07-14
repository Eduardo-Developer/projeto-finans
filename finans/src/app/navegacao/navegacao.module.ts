import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavegacaoComponent } from './navegacao.component';

@NgModule({
    declarations: [
        NavegacaoComponent,
        HomeComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        HomeComponent,
        MenuComponent,
        FooterComponent
    ]
})

export class NavegacaoModule { }