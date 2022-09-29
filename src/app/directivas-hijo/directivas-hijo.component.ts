import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-hijo',
  templateUrl: './directivas-hijo.component.html',
  styleUrls: ['./directivas-hijo.component.css']
})
export class DirectivasHijoComponent implements OnInit {
  // en tsconfig.json escribir "strictPropertyInitialization": false, 
  // para no tener que inicializar "bandaDeLista" ni "indice"
  @Input() bandaDeLista: string; // Importamos del componente padre directivas1
  @Input() indice: number; // Importamos del componente padre directivas1

  constructor() { }

  ngOnInit(): void {
  }

}
