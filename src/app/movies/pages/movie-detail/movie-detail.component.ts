import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/MovieModel";


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, AfterContentInit {

    movie!: MovieModel;
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
        this.validWatchlist(movie);
    }

    validWatchlist(movie: MovieModel) {
        this.isOnWatchlist = this.movieService.validMovieWatchlist(movie);
    }

    deleteMovieWatchList(movie: MovieModel) {
        this.movieService.deleteMovieWatchList(movie);
        this.validWatchlist(movie);

    }

}
