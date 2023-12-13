import {EventEmitter, Injectable} from '@angular/core';
import {MovieModel} from "../models/MovieModel";
import {MoviesModule} from "../movies.module";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: MovieModel[] = [
    {
      id: 1,
      title: 'Tenet',
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a\n" +
        "Protagonist journeys through a twilight world of international espionage on a mission that will unfold in\n" +
        "something beyond real time.",
      rating: 7.8,
      duration: "2h 30 min",
      genre: "Sci-Fi",
      releasedDate: new Date('2020-09-03'),
      trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
      image: "assets/resources/Tenet.png"
    },
    {
      id: 2,
      title: 'Spider-Man: Into the Spider-Verse',
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-\n" +
        "powered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: "1h 57min",
      genre: "Action, Animation, Adventure",
      releasedDate: new Date('2018-12-14'),
      trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0",
      image: "assets/resources/Spider%20Man.png"
    },
    {
      id: 3,
      title: 'Knives Out',
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      duration: "2h 10min",
      genre: "Comedy, Crime, Drama",
      releasedDate: new Date('2019-11-27'),
      trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
      image: "assets/resources/Knives%20Out.png"
    },
    {
      id: 4,
      title: 'Guardians of the Galaxy',
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to\n" +
        "purge the universe.",
      rating: 8.0,
      duration: "2h 1 min",
      genre: "Action, Adventure, Comedy",
      releasedDate: new Date('2014-08-01'),
      trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA",
      image: "assets/resources/Guardians%20of%20The%20Galaxy.png"
    },

    {
      id: 5,
      title: 'Avengers: Age of Ultron',
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program\n" +
        "called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron\n" +
        "from enacting his terrible plan.",
      rating: 7.3,
      duration: "2h 21 min",
      genre: "Action, Adventure, Sci-Fi",
      releasedDate: new Date('2015-05-01'),
      trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do",
      image: "assets/resources/Avengers.png"
    },
    {
      id: 6,
      title: 'The batman',
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, " +
        "Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      rating: 7.8,
      duration: "2h 56 min",
      genre: "Action",
      releasedDate: new Date('2022-06-06'),
      trailerLink: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
      image: "assets/resources/Thebatman.png"
    },
    {
      id: 7,
      title: 'Oppenheimer',
      description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development " +
        "of the atomic bomb.",
      rating: 8.5,
      duration: "3 h",
      genre: "Sci-Fi",
      releasedDate: new Date('2023-06-01'),
      trailerLink: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      image: "assets/resources/oppenheimer.png"
    },
    {
      id: 8,
      title: 'The Exorcist',
      description: "When a young girl is possessed by a mysterious entity, her mother seeks the help of two Catholic priests to save her life.",
      rating: 8.1,
      duration: "2h 2 min",
      genre: "Terror",
      releasedDate: new Date('1973-12-26'),
      trailerLink: "https://www.youtube.com/watch?v=BU2eYAO31Cc",
      image: "assets/resources/exorcist.png"
    },

  ]

  constructor() {
  }

  getAllMovies(): MovieModel[] {
    return this.movies;
  }

  getMovieById(id: number): MovieModel {
    return <MovieModel>this.movies.find(movie => movie.id == id)
  }

  orderMovieByParam(orderBy: string): void {
    if (orderBy == 'title') {
      this.movies.sort((a: MovieModel, b: MovieModel) => a.title?.localeCompare(b.title));
      return;
    }
    if (orderBy == 'date') {
      this.movies.sort((a: MovieModel, b: MovieModel) => b.releasedDate.getTime() - a.releasedDate.getTime());
      return;

    }
    this.movies.sort(() => (Math.random() - 0.5));

  }

  saveMovieWatchList(movieToSave: MovieModel): void {
    let movieWatchList: MovieModel[] = this.getAllMoviesWatchList();
    let validWatchList: boolean = movieWatchList.some(movieWatchList => movieWatchList.id == movieToSave.id)
    if (validWatchList) return;
    movieWatchList.push(movieToSave);
    localStorage.setItem("movieWatchList", JSON.stringify(movieWatchList));
  }

  deleteMovieWatchList(movieToRemove: MovieModel): void {
    let movieWatchList: MovieModel[] = this.getAllMoviesWatchList();
    movieWatchList = movieWatchList.filter(movieWatchList => movieWatchList.id != movieToRemove.id)
    localStorage.setItem("movieWatchList", JSON.stringify(movieWatchList));
  }

  getAllMoviesWatchList(): MovieModel[] {
    return JSON.parse(localStorage.getItem("movieWatchList") || '[]');
  }

  validMovieWatchlist(movie: MovieModel): boolean {
    let movieWatchList = this.getAllMoviesWatchList();
    if (movieWatchList.length) {
      return movieWatchList.some(movieWatchList => movie.id == movieWatchList.id);
    }
    return false
  }

  deleteWatchList(): void {
    localStorage.removeItem("movieWatchList");
  }


}
