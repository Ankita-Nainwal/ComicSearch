import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  users = [];
  flag: boolean;
  flag1:boolean;

  id;
  constructor(public connector: ConnectService) { }

  ngOnInit() {
    this.flag = false;
    this.flag1 = false;

    this.getUsers();
  }



  getUsers() {
    this.connector.getUsers().subscribe
      (resdata => {
        this.users = resdata

        console.log(this.users);
      })
  }
  //
  // deleteUsers(data)
  // {
  //   console.log(data);
  //    this.connector.deleteUsers(data).subscribe(res => {
  //     // this.series = res.respData.data;
  //     console.log(res, "form ser");
  //
  // //    this.getUsers();
  //
  //   }
  //     , errorr => {
  //       alert(errorr);
  //     });
  // }
  show(items) {
    this.id = items
    this.flag = !this.flag;

  }

add(items)
{
  this.id=items
  this.flag1 = !this.flag1;
}

  deleteUsers(data) {
    console.log(data)
    this.connector.deleteUsers(data).subscribe(data => {
      console.log(data)
      if (data == "success") {
        alert("User Deleted");
      }
      this.getUsers();
    })
  }

  edituser(form) {
    console.log(form)

    this.connector.edituser(this.id, form)
      .subscribe(data => {
        console.log(data)
        // this.gseries();
        // this.flag1 = 0
      })

  }
  adduser(data) {
    // data.starts_on = data.starts_on.formatted;
    // data.ends_on = data.ends_on.formatted;
    console.log(data)
    this.connector.postuser(data)
      .subscribe(resdata => {
        console.log(resdata)
        // this.gseasons();
        // this.flag2 = 0;
      })

  }

  openaaddform() {
    // this.flag2 = 1;
    this.flag1=!this.flag1
  }
}
