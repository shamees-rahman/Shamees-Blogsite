import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  blogs : blogmodel[]=[];
  comment:String="hi";
  constructor(public service: ServicesService) { }

  ngOnInit(): void {
    this.service.getBlogs().subscribe((data)=>{
      this.blogs = JSON.parse(JSON.stringify(data));
      console.log(this.blogs);})
  }
  addItem(){
    this.service.addComment(this.comment);
    window.location.reload();}  
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