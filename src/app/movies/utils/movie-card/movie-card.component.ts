import {
    AfterContentInit,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/MovieModel";
import {Router} from "@angular/router";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, AfterContentInit {

    @Input() movie!: MovieModel;
    @Input() IsOnWatchListPage!: boolean;
    isOnWatchListMovie: boolean = false;


    constructor(
        private router: Router,
        private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.validWatchlist(this.movie);
    }

    goToMovieDetail(id: number | undefined) {
        this.router.navigate(['/movies/movie-detail', id]).then();
    }

    saveMovieWatchList(movie: MovieModel) {
        this.movieService.saveMovieWatchList(movie);
        this.validWatchlist(movie);
    }

    deleteMovieWatchList(movie: MovieModel) {
        this.movieService.deleteMovieWatchList(movie);
        this.validWatchlist(movie);

    }

    validWatchlist(movie: MovieModel) {
        this.isOnWatchListMovie = this.movieService.validMovieWatchlist(movie);
    }


}
