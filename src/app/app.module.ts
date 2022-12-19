import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

import { AppComponent } from './app.component';

//Modulo personalizado
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
    VentaModule,
    ToolbarModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
