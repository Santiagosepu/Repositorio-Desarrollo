import { Component, OnInit } from '@angular/core';
import { JsonService } from '../servicios/json/json.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent{

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
        this.datosPersonales = data["Datos-Personales"];
        console.log(data["Datos-Personales"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }
}
