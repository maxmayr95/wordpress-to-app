import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from './../services/wordpress.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private id:any;
  private post:any;
  constructor(private activatedRoute:ActivatedRoute,private wordpressService:WordpressService) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.wordpressService.loadPost(this.id).subscribe(data=>{
      this.post = data;
    });

  }

}
