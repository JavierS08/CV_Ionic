import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnoPageRoutingModule } from './tecno-routing.module';

import { TecnoPage } from './tecno.page';
import { ComponentsModule } from "../components/components.module";


@NgModule({
    declarations: [TecnoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TecnoPageRoutingModule,
        ComponentsModule
    ]
})
export class TecnoPageModule {}
