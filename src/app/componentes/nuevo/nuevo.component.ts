import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PeticionesService } from '../../peticiones.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  //VARIABLES 
  nuevopost: FormGroup;

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.nuevopost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onEnviar() {
    const respuesta = await this.peticionesService.addPost(this.nuevopost.value);
    console.log(respuesta);

  }

}
