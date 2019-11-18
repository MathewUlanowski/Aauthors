import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  Author: any;
  constructor(
    private _http: HttpService,
    private _router: Router,
) {}

  ngOnInit() {
    this.Author = {name: ""}
  }



  //written logic
  Home(){
    this._router.navigate(['home'])
  }

  CreateAuthor(){
    console.log('creating author')
    this._http.createAuthor(this.Author).subscribe(data => {
      console.log(data)
      this.Author.push
      this._router.navigate(['home'])
    })
    console.log('created author')
  }
}
