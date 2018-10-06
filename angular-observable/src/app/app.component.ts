import { Component } from '@angular/core';
import { IMDBAPIService } from "./services/imdbapi.service";
import { Movie } from "./models/movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable works!';

  private movies: Movie[] = [];
  private error: boolean = false;
  private finished: boolean = false;
  constructor(private IMDBAPI: IMDBAPIService) {
    this.IMDBAPI.fetchOneById(1).subscribe( value => 
      {
        this.movies.push(value);
        console.log("Component", value);
      },
      error => this.error = error,
      () => this.finished = true);
  }
}
