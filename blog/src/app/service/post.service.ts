import { Post } from './../model/Post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlBase = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.urlBase);
  }

  getPostsPorNome(nome: string){
    return this.http.get(`${this.urlBase}?nome=${nome}`);
  }

  createPost(post: Post) {
    return this.http.post(this.urlBase, post);
  }
}
