import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMovieComponent} from "./pages/main-movie/main-movie.component";
import {MovieDetailComponent} from "./pages/movie-detail/movie-detail.component";
import {WatchlistComponent} from "./pages/watchlist/watchlist.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'movies-list', component: MainMovieComponent},
      {path: 'watchlist', component: WatchlistComponent},
      {path: 'movie-detail/:id', component: MovieDetailComponent},
      {path: '**', redirectTo: 'movies-list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
