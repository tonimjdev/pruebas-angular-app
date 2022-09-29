import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas1',
  templateUrl: './directivas1.component.html',
  styleUrls: ['./directivas1.component.css']
})
export class Directivas1Component  {

  bandas:string[] = ['The Beatles', 'U2', 'Police', 'Pink Floyd', 'Eagles', 'Foo Fighters'];
  

  mensaje: string = "";
  registrado: boolean = false;

  usuarioRegistrado() {

    this.registrado = true;
    this.mensaje = "El usuario se ha registrado correctamente";
  }

}
