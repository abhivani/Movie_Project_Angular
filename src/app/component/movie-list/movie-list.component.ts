import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      
      //this.service.searchMovies('spider');
      //this.service.searchMovies('spider').subscribe()
      this.activatedRoute.queryParams.subscribe(
          
        qparams=>{
          let q= qparams['movieName'];
          this.service.searchMovies(q).subscribe(resp=>this.movies=resp.Search)
        }
      )
     } 
}
