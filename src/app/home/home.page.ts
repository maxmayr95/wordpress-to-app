import { Component,OnInit } from '@angular/core';
import { WordpressService } from './../services/wordpress.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private posts: any;
  constructor(private router:Router,private wordpressService:WordpressService) {}

  ngOnInit(){
    this.wordpressService.loadPosts().subscribe(data=>{
      this.posts = data;
    }) 
  }

  openPost(id){
    this.router.navigate(['/post/',id]);
  }
}
