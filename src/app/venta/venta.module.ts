import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeroComponent } from './page/numero/numero.component';
import { NoComunComponent } from './page/no-comun/no-comun.component';
import { BasicoComponent } from './page/basico/basico.component';
import { OrdenarComponent } from './page/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumeroComponent,
    NoComunComponent,
    BasicoComponent,
    OrdenarComponent
  ],
  exports: [
    NumeroComponent,
    NoComunComponent,
    BasicoComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentaModule { }
