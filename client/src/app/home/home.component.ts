import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  variable;
  constructor(public router: Router, public connector: ConnectService) { }
  flag = 0;
  ngOnInit() {
  }
  login(form1) {

    this.connector.loginstatus(form1).subscribe(data => {
      console.log(data, "fromservice");
      this.variable = data.user_type;
      console.log(this.variable);


      if (this.variable == "Admin") {
        this.router.navigate(['/admin-page']);
      }
      else if (this.variable == "SuperAdmin") {
        this.router.navigate(['/superadmin-page']);
      }
      else if (this.variable == "user") {
        this.router.navigate(['/user-page']);
      }
      else {
        alert("User Does not exist")
      }
    })

  }
  login1(data) {
    // data.starts_on = data.starts_on.formatted;
    // data.ends_on = data.ends_on.formatted;
    this.connector.postuser(data)
      .subscribe(resdata => {
        console.log(resdata)
        // this.gseasons();
        this.flag = 0;
      })

  }

  openaaddform() {
    this.flag = 1;
  }
}
