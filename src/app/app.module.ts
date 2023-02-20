import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
// import { ContadorComponent } from './contador/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.module';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
