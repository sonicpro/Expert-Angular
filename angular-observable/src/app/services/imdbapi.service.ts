import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Movie, MovieFields } from "../models/movie";
import { Observable } from "rxjs";
import { mergeMap, filter, map } from "rxjs/operators";

@Injectable()

export class IMDBAPIService {
  private baseUrl: string = "http://localhost:3000/";

  constructor(private http: Http) { }

  /**
   * Return an Observable to a Movie matching id
   * @param {number} id
   * @return {Observable<Movie>}
   */
  public fetchOneById(id: number): Observable<Movie> {
    console.log("fetchOneById", id);

    return this.http.get(this.baseUrl + "movies").pipe(
      /**
       * Flattens an Observable-of-Observables.
       */
      mergeMap(res => res.json()),
      /**
      * Filters movies by their movie_id
      */
      filter((movie: any) => {
          console.log("filter", movie);
          return (movie.movie_id === id);
        }),
      /**
       * Map the JSON movie to the model of Movie class.
       */
      map((movie: any) => {
          console.log("map", movie);
          return new Movie(
            movie.movie_id,
            movie.title,
            movie.phase,
            movie.category_name,
            movie.release_year,
            movie.running_time,
            movie.rating_name,
            movie.disc_format_name,
            movie.number_discs,
            movie.viewing_format_name,
            movie.aspect_ratio_name,
            movie.status,
            movie.release_date,
            movie.budget,
            movie.gross,
            movie.time_stamp
          );
        })
    );
  }

  /**
  * Return an Observable to a Movie matching id
  * @param {MovieFields} id
  * @return {Observable<Movie>}
  */
  public fetchByField(field: MovieFields, value: string | number): Observable<Movie> {
      return this.http.get(this.baseUrl + "movies").pipe(
        mergeMap((response: Response) => response.json()),
        filter((movie: any) => {
          console.log("filter", movie);
          return movie[MovieFields[field]] === value;
        }),
        map((movie: any) => {
            console.log("map", movie);
            return new Movie(
              movie.movie_id,
              movie.title,
              movie.phase,
              movie.category_name,
              movie.release_year,
              movie.running_time,
              movie.rating_name,
              movie.disc_format_name,
              movie.number_discs,
              movie.viewing_format_name,
              movie.aspect_ratio_name,
              movie.status,
              movie.release_date,
              movie.budget,
              movie.gross,
              movie.time_stamp
            );
        })
      );
  }
}
