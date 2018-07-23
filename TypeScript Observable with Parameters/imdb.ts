// IMDB implementation of the Subject.
import { Subject } from "./subject"

export class IMDB extends Subject {
	// The internal state.
	private movies: string[] = [];

	public addMovie(movie: string) {
		this.movies.push(movie);
		this.notifyObservers(movie);
	}
}