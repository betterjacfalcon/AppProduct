import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre:string = 'ALejandrA';
  valor: number = 1977;
  obj = {
    nombre:'luisa'
  }

  mostrarNombre():void{
    console.log(this.nombre);
    console.log(this.valor);
  }
}
