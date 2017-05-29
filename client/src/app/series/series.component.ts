import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
series=[];
  constructor(public connector:ConnectService) { }
  getSeries()
  {
    this.connector.getSeries().subscribe
    (resdata => this.series = resdata);
  console.log(this.series);
  }
  ngOnInit() {
    this.getSeries();
  }

  deleteSeries(data)
  {
    console.log(data);
     this.connector.deleteSeries(data).subscribe(res => {
      // this.series = res.respData.data;
      console.log(res);

      this.getSeries();

    }
      , errorr => {
        alert(errorr);
      });
  }

}
