import { Component, OnInit } from '@angular/core';
import { JsonService } from '../servicios/json/json.service';

@Component({
  selector: 'app-infromacion-academica',
  templateUrl: './infromacion-academica.component.html',
  styleUrls: ['./infromacion-academica.component.css']
})
export class InfromacionAcademicaComponent {

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
        this.datosAcademicos = data["datos-academicos"];
        console.log(data["datos-academicos"]);
      },
      error: (err: any) =>{
        alert("Ocurrió un error inesperado")
        console.log(err);
      }
    });
  }
}
