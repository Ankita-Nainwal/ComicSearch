import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
season=[];
  constructor(public connector:ConnectService) { }
  getSeason(){
    this.connector.getSeason().subscribe
    (resdata => this.season = resdata);
  console.log(this.season);
  }
  ngOnInit() {
    this.getSeason()

  }

  deleteSeason(data)
  {
    console.log(data);
     this.connector.deleteSeason(data).subscribe(res => {
      this.season = res.respData.data;
      console.log(this.season);


    }
      , errorr => {
        alert(errorr);
      });
  }

}
