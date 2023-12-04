import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieCardComponent } from './utils/movie-card/movie-card.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { MainMovieComponent } from './pages/main-movie/main-movie.component';
import {RouterModule} from "@angular/router";
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainMovieComponent,
    MovieDetailComponent,
    MovieCardComponent,
    NavBarComponent,
    WatchlistComponent,
    SafePipePipe
  ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class MoviesModule { }
