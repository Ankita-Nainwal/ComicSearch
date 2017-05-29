import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {
  data;
  loginurl = "http://localhost:3000/api/v1/login"

  private urlusers: string = "http://localhost:3000/api//v1/users";
  private urlcomics: string = "http://localhost:3000/api/v1/comics";
  private urlseries: string = "http://localhost:3000/api/v1/series";
  private urlseason: string = "http://localhost:3000/api/v1/season";

  private urlcomicssearch: string = "http://localhost:3000/api/v1/comicssearch/";
  private urlcomicsdelete: string = "http://localhost:3000/api/v1/comicsdelete";
  private urldeleteseason: string = "http://localhost:3000/api/v1/seasondelete";
  private urldeleteusers: string = "http://localhost:3000/api/v1/usersdelete";
  private urldeleteseries: string = "http://localhost:3000/api/v1/seiesdelete"
  private urledituser: string = "http://localhost:3000/api/v1/updateusers/"

  constructor(public httpService: Http) { }

  loginstatus(form): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded ;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    console.log(form, "inservice");
    return this.httpService.post(this.loginurl, form, headers).map((res: Response) => res.json());
  }

  getUsers() {
    return this.httpService.get(this.urlusers)
      .map((res: Response) => res.json())

  }


  getComics() {
    return this.httpService.get(this.urlcomics)
      .map((res: Response) => res.json())

  }

  getSeries() {
    return this.httpService.get(this.urlseries)
      .map((res: Response) => res.json())

  }
  getSeason() {
    return this.httpService.get(this.urlseason)
      .map((res: Response) => res.json())

  }

  searchComics(searchword): Observable<any> {
    // console.log(searchword,"ser")
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    //  let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.urlcomicssearch + searchword)
      .map(res => res.json())

  }

  deleteComics(data) {
    return this.httpService.delete(this.urlcomicsdelete + '/' + data)
      .map(res =>
        res.json()
      )


  }

  deleteSeason(data) {

    return this.httpService.delete(this.urldeleteseason + '/' + data)
      .map(res => res.json())

  }


  deleteUsers(data) {
    console.log(data);

    return this.httpService.delete(this.urldeleteusers + '/' + data)
      .map(res => res.json())

  }

  deleteSeries(data) {

    return this.httpService.delete(this.urldeleteseries + '/' + data)
      .map(res => res.json())

  }

  SendSearchResult(DataObj) {
    this.data = DataObj;
    console.log(this.data);
  }
  GetSearchResult() {
    return this.data;
  }
  edituser(id,form){
    return this.httpService.put(this.urledituser+id, form)
    .map(res => res.json())
  }
  postuser(user): Observable<any> {
    console.log(user,"ser")
    let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.urlusers, user,headers)
      .map(res => res.json())

  }

}
