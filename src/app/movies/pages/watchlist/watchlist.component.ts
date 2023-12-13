import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/MovieModel";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{


  moviesWatchList!: MovieModel[]
  IsOnWatchListPage = true;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.moviesWatchList = this.movieService.getAllMoviesWatchList();
  }

  deleteWatchList(){
    this.movieService.deleteWatchList();
    this.moviesWatchList = this.movieService.getAllMoviesWatchList();
  }

}
