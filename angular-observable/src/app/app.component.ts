import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import { IMDBAPIService } from "./services/imdbapi.service";
import { Movie, MovieFields } from "./models/movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "angular-observable works!";

  private movies: Movie[] = [];
  private error: boolean = false;
  private finished: boolean = false;
  private imdbSubscription: Subscription;
  constructor(private IMDBAPI: IMDBAPIService) {
    // this.IMDBAPI.fetchOneById(1).subscribe( value => {
    //     this.movies.push(value);
    //     console.log("Component", value);
    //   },
    //   error => this.error = error,
    //   () => this.finished = true);
    this.imdbSubscription = this.IMDBAPI.fetchByField(MovieFields.release_year, 2015).subscribe((value: Movie) => {
      this.movies.push(value);
      console.log("Component", value);
      if (this.movies.length > 2) {
        this.imdbSubscription.unsubscribe(); // Stop the Observable steram after the third matched movie fetched.
      }
    },
    error => this.error = error,
    () => this.finished = true);
  }
}
