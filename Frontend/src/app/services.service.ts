import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }
  getBlogs (){
    return this.http.get('http://localhost:3200/blog');
  }
  addComment(comment:any){
    return this.http.put('http://localhost:3200/blog',comment)
  }
}
