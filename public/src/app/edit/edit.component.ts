import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  authorEdit: any;
  ShitsFucked: any;
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.authorEdit = {name: ""}
    this._route.params.subscribe(params => {
      this._http.getAuthor(params['id']).subscribe(data => {
        console.log(data)
        this.authorEdit = data['foundAuthor']
      })
    })
    console.log(this.authorEdit)
  }




  //written logic
  Home(){
    this._router.navigate(['home'])
  }

  EditAuthor(){
    console.log("editing Component")
    this._http.updateAuthor(this.authorEdit._id, this.authorEdit).subscribe(data => {
      console.log(data)
      if(data['status']) this._router.navigate(['home'])
      else this.ShitsFucked = data['err']
    })
    console.log("author edited")
  }
}
