import { Component, OnInit } from '@angular/core';
//import httpservice and declare variables 
import { HttpService } from './../http.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private _http: HttpService,
      private _router: Router,
    ) { }
  allAuthors:any;
  ngOnInit() {
    console.log('made it to the home route')
    this.getAuthorsFromHttp();
    
  }
  getAuthorsFromHttp() {
    let observable = this._http.getAuthors();
    observable.subscribe(data => {
      if (data['status'] == false) {
        console.log()
        console.log(data['errors']);
      }
      else {
        this.allAuthors = data['allAuthors'];
      }
    })
  }
  addAuthor(){
    this._router.navigate(['new'])
  }
  edit(id){
    this._router.navigate(['edit', id])
  }
  delete(id, i){
    this._http.deleteAuthor(id).subscribe(data => {
      console.log(data)
      if(data['status']) this.allAuthors.splice(i,1)
    })
  }
}
