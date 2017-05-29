import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
comics=[];
  constructor(public connector:ConnectService) { }

  ngOnInit() {
    this.getComics()
  }

  getComics(){
    this.connector.getComics().subscribe
    (resdata => this.comics = resdata);
  console.log(this.comics);
  }

  deleteComics(data)
  {
    console.log(data);
     this.connector.deleteComics(data).subscribe(res => {
      this.comics = res.respData.data;
      console.log(this.comics);


    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
}
