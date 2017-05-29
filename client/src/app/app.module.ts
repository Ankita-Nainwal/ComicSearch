import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes} from '@angular/router';
import { ConnectService } from './connect.service';
import { ComicsComponent } from './comics/comics.component';
import { SeasonComponent } from './season/season.component';
import { SeriesComponent } from './series/series.component';
import { SearchComponent } from './search/search.component';

import { DisplaycomicsComponent } from './displaycomics/displaycomics.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user-page',
    component: UserComponent
  },
  {
      path: 'admin-page', component: AdminComponent,
      // children: [
      //     //   { path: '', redirectTo: 'comics', pathMatch: 'full' },
      //     { path: 'comics-page', component: ComicsComponent },
      // ]
  },
  {
 path: 'superadmin-page',
  component: SuperadminComponent
},
{
  path:'comics-page',
  component: ComicsComponent
},

{
  path:'series-page',
  component: SeriesComponent
},
{
  path:'season-page',
  component: SeasonComponent
},
{
  path:'search-page',
  component: SearchComponent
},
{
  path:'display-page',
  component: DisplaycomicsComponent
}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperadminComponent,
    AdminComponent,
    UserComponent,
    ComicsComponent,
    SeasonComponent,
    SeriesComponent,
    SearchComponent,
    DisplaycomicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
