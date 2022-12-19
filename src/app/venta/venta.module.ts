import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeroComponent } from './page/numero/numero.component';
import { NoComunComponent } from './page/no-comun/no-comun.component';
import { BasicoComponent } from './page/basico/basico.component';
import { OrdenarComponent } from './page/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { VolarPipe } from './pipe/volar.pipe';
import { OrdenarPipe } from './pipe/ordenar.pipe';




@NgModule({
  declarations: [
    NumeroComponent,
    NoComunComponent,
    BasicoComponent,
    OrdenarComponent, 
    MayusculaPipe,
    VolarPipe,
    OrdenarPipe

  ],
  exports: [
    NumeroComponent,
    NoComunComponent,
    BasicoComponent,
    OrdenarComponent,
    MayusculaPipe,
    VolarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentaModule { }
