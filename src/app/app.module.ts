import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentaModule } from './venta/venta.module';

//Cambiar el idioma
import  ModuleES from '@angular/common/locales/es-HN';
import  ModuleFR from '@angular/common/locales/fr';

import  {registerLocaleData} from '@angular/common';


registerLocaleData(ModuleES);
registerLocaleData(ModuleFR);

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRouterModule,  
    SharedModule, 
    VentaModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
