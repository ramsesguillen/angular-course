import { CommonModule } from "@angular/common";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent,
  ],
  exports: [
    ListadoComponent,
  ],
  imports: [
    CommonModule // importar si se van a utilizar directivas en el html
  ],
})
export class HeroesModule {}
