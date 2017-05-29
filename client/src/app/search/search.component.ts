import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
comics;
data;
  constructor(public router: Router, public connector:ConnectService) { }

  ngOnInit() {

  }
  searchComics()
  {

    console.log(this.data,"search")
    this.connector.searchComics(this.data).subscribe
    (resdata => {
      this.comics=resdata.respData.data;
      this.connector.SendSearchResult(this.comics);
      console.log(this.comics)

      this.router.navigate(["/display-page"]);

  }
)}

}
