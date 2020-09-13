import { Component, OnInit } from '@angular/core';

import { Post } from './../model/Post';
import { PostService } from './../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  post = new Post();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPost();
  }

  findPost(){
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    });
  }

  findPostByName(){
    this.postService.getPostsPorNome(this.post.nome).subscribe((data: Post[]) => {
      this.listPost = data;
      console.log(this.post.nome);
    });
  }

  createPost() {
    this.postService.createPost(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/feed');
    });
  }
}
