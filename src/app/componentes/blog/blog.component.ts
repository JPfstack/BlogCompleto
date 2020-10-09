import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../peticiones.service';
import { POST } from '../../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  //VARIABLES
  listaPost: POST[];

  constructor(
    private peticionesService: PeticionesService,
  ) { }

  async ngOnInit() {
    this.listaPost = await this.peticionesService.getAllPost();
    console.log(this.listaPost);




  }

}


