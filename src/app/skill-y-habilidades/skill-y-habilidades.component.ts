import { Component } from '@angular/core';
import { JsonService } from '../servicios/json/json.service';

@Component({
  selector: 'app-skill-y-habilidades',
  templateUrl: './skill-y-habilidades.component.html',
  styleUrls: ['./skill-y-habilidades.component.css']
})
export class SkillYHabilidadesComponent {

  datosPersonales: any;
  datosAcademicos: any;
  aboutMe: any;
  skillyHabilidades: any;
  footer: any;

constructor(private JsonService: JsonService){

}

ngOnInit(){
    this.JsonService.getJson().subscribe({
      next: (data: any) => {
        this.skillyHabilidades = data["Hablilidades"];
        console.log(data["Habilidades"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }


}
