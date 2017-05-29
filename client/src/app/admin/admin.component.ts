import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
comics=[];
season=[];
series=[];
  constructor(public connector:ConnectService) { }

  // getComics(){
  //   this.connector.getComics().subscribe
  //   (resdata => this.comics = resdata);
  // console.log(this.comics);
  // }
  //
  // getSeries()
  // {
  //   this.connector.getSeries().subscribe
  //   (resdata => this.series = resdata);
  // console.log(this.series);
  // }
  //
  // getSeason(){
  //   this.connector.getSeason().subscribe
  //   (resdata => this.season = resdata);
  // console.log(this.season);
  // }


  ngOnInit() {
  }

}
