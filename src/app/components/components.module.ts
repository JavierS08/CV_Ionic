import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TecnologiasComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[TecnologiasComponent]
})
export class ComponentsModule { }
