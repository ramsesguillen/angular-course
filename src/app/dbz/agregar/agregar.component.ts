import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>()

  agregar(): void {
    if (!this.nuevo.nombre.trim()) return;
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
