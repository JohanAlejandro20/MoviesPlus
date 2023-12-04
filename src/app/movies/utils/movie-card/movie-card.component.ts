import {
    AfterContentInit,
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MoviesModule} from "../../movies.module";
import {MovieModel} from "../../modules/MovieModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, AfterContentInit {

    @Input() movie!: MovieModel;
    @Input() watchListPage!: boolean;
    movieWatchList!: MovieModel[];
    isOnWatchlist: boolean = false;


    constructor(
        private router: Router,
        private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        this.movieWatchList = this.movieService.getAllMoviesWatchList();
    }

    ngAfterContentInit(): void {
        this.validWatchlist(this.movie);
    }

    goToMovieDetail(id: number | undefined) {
        this.router.navigate(['/movies/movie-detail', id]).then();
    }

    saveMovieWatchList(movie: MovieModel) {
        this.movieService.saveMovieWatchList(movie);
        this.movieWatchList = this.movieService.getAllMoviesWatchList();
        this.validWatchlist(movie);
    }

    deleteMovieWatchList(movie: MovieModel) {
        this.movieService.deleteMovieWatchList(movie);
        this.movieWatchList = this.movieService.getAllMoviesWatchList();
        this.validWatchlist(movie);

    }

    validWatchlist(movie: MovieModel) {
        this.isOnWatchlist = this.movieService.validMovieWatchlist(movie);
    }


}
