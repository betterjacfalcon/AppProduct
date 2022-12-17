import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-no-comun',
  templateUrl: './no-comun.component.html',
  styleUrls: ['./no-comun.component.css']
})
export class NoComunComponent {

  //i18nSelect
  nombre:string = 'alejandra';
  genero:string ='femenino';
  invitacionMapa ={
    'masculino':'selecionado',
    'femenino': 'selecionada'
  }

  //i18nPlural
  clientes:string[] = ['Maria', 'alejandra', 'roberto', 'peter', 'javier' , 'luis'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre ='Peter Carvajal';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue pipe
  personas = {
    nombre: 'Alejandra',
    edad:45,
    direccion:'san jose costa rica'

  }

  heroe= [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable = interval(1000).pipe( tap( () => console.log('interval')));

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(()=> {
      resolve('tenemos  data de promesa');    
    }, 3500);
   });

  /*constructor(){
    //this.miObservable.subscribe(console.log);}*/
}
