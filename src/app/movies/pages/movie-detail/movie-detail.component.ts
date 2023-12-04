import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../modules/MovieModel";


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, AfterContentInit {

    movie!: MovieModel;
    movieWatchList!: MovieModel[];
    isOnWatchlist = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.movie = this.movieService.getMovieById(params['id']);
            }
        );
    }

    ngAfterContentInit(): void {
        this.validWatchlist(this.movie);
    }

    saveMovieWatchList(movie: MovieModel) {
        this.movieService.saveMovieWatchList(movie);
        this.movieWatchList = this.movieService.getAllMoviesWatchList();
        this.validWatchlist(movie);
    }

    validWatchlist(movie: MovieModel) {
        this.isOnWatchlist = this.movieService.validMovieWatchlist(movie);
    }

    deleteWatchList(movie: MovieModel) {
        this.movieService.deleteMovieWatchList(movie);
        this.movieWatchList = this.movieService.getAllMoviesWatchList();
        this.validWatchlist(movie);

    }

}
