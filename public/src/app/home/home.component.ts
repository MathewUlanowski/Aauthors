import { Component, OnInit } from '@angular/core';
//import httpservice and declare variables 
import { HttpService } from './../http.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpService) { }
  allAuthors:any;
  ngOnInit() {
    this.getAuthorsFromHttp();
  }
  getAuthorsFromHttp() {
    let observable = this._http.getAuthors();
    observable.subscribe(data => {
      if (data['status'] == false) {
        console.log(data['errors']);
      }
      else {
        this.allAuthors = data['allAuthors'];
      }
    })
  }
}
