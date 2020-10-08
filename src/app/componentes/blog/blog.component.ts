import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../peticiones.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private peticionesService: PeticionesService,
  ) { }

  async ngOnInit() {
    const listaPost = await this.peticionesService.getAllPost();
    console.log(listaPost);


  }

}
