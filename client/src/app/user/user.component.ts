import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  comics=[];
  flag:boolean;
  constructor(public connector:ConnectService) {
  this.flag=false;
}

  ngOnInit() {
// this.getComics()
// this.onuserclick()
  }
getComics(){
  this.connector.getComics().subscribe
  (resdata => this.comics = resdata);
console.log(this.comics);
}
onuserclick(){
  this.flag=!this.flag;
  this.connector.getComics().subscribe
  (resdata => this.comics = resdata);
}
}
