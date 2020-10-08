import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  //VARIABLES 
  nuevopost: FormGroup;

  constructor() {
    this.nuevopost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onEnviar() {

  }

}
