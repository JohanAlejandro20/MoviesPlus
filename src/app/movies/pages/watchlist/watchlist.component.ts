import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../modules/MovieModel";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{


  watchList!: MovieModel[]
  watchListPage = true;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.watchList = this.movieService.getAllMoviesWatchList();
  }

  deleteWatchList(){
    this.movieService.deleteWatchList();
    this.watchList = this.movieService.getAllMoviesWatchList();
  }

}
