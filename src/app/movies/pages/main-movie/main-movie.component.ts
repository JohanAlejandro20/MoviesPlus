import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieModel} from "../../models/MovieModel";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-movie',
  templateUrl: './main-movie.component.html',
  styleUrls: ['./main-movie.component.css']
})
export class MainMovieComponent implements OnInit {

  movies!: MovieModel[];
  orderByForm!: FormGroup;

  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getMovies();
  }

  createForm() {
    this.orderByForm = this.formBuilder.group({
        orderBy: [""]
      }
    )
  }

  getMovies() {
    this.movies = this.movieService.getAllMovies();
  }

  orderMovies() {
      this.movieService.orderMovieByParam(this.orderByForm.value.orderBy);
  }

}
