import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogs : blogmodel[]=[]  
  constructor(public service: ServicesService) { }

  ngOnInit(): void {
    this.service.getBlogs().subscribe((data)=>{
      this.blogs = JSON.parse(JSON.stringify(data));
      console.log(this.blogs);
    })
  }
}

class blogmodel {
  constructor
  (public blogname: String,
  public author: String,
  public followers: Number,
  public posts:[
      {
          title: String,
          date: String,
          body: String,
          likes: Number,
          comments:[]
      }
  ]){}
};