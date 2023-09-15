import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { InfromacionAcademicaComponent } from './infromacion-academica/infromacion-academica.component';
import { SkillYHabilidadesComponent } from './skill-y-habilidades/skill-y-habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    InfromacionAcademicaComponent,
    SkillYHabilidadesComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
