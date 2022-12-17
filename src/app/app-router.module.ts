import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './venta/page/basico/basico.component';
import { NoComunComponent } from './venta/page/no-comun/no-comun.component';
import { NumeroComponent } from './venta/page/numero/numero.component';
import { OrdenarComponent } from './venta/page/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicoComponent,
    pathMatch:'full'
  },
{
  path: 'numero',
  component: NumeroComponent
},
{
  path: 'noComun',
  component: NoComunComponent
},
{
  path: 'ordenar',
  component: OrdenarComponent
},
{
  path: '**',
  redirectTo: ''
}

];

@NgModule({ 
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
