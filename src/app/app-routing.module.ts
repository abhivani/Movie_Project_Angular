import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
//import { MoviesService } from './services/movies.service';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MovieListComponent},
  {path:'movie-details/:movieID', component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



