import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  //VARIABLES
  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "https://blogpeces.herokuapp.com/api";
  }

  getAllPost(): Promise<POST[]> {
    return this.httpClient.get<POST[]>(this.baseUrl).toPromise();
  }

  addPost(formvalue): Promise<POST> {
    return this.httpClient.post<POST>(this.baseUrl, formvalue).toPromise();
  }

}
