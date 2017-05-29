import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-displaycomics',
  templateUrl: './displaycomics.component.html',
  styleUrls: ['./displaycomics.component.css']
})
export class DisplaycomicsComponent implements OnInit {
comics=[];
  constructor(public router: Router,public connector:ConnectService) { }

  ngOnInit() {
      this.comics=this.connector.GetSearchResult();

  }


}
