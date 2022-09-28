import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }
  
  textoCheck: string = "Check NO está seleccionado";
  empresa: string = "Google";
  
  marcarCheck(event:Event) {

    if ((<HTMLInputElement>event.target).value=='si') {
      this.textoCheck = "Check SÍ está seleccionado";
    } else {
      this.textoCheck = "Check NO está seleccionado";
    }
    
  }

  ngOnInit(): void {
  }

}
