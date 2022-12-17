import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {

  nombreUpper: string = 'Alejandra';
  nombreLower: string = 'ALEJANDRA';
  nombreCompleto:string = 'Alejandra Rodriguez'
  fecha: Date = new Date();
}
