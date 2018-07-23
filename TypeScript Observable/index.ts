import { IMDB } from "./imdb"
import { HumanObserver } from "./humanObserver"

let imdb: IMDB = new IMDB();
let mathieu: HumanObserver = new HumanObserver("Mathieu");
imdb.attachObserver(mathieu);
imdb.addMovie("Jaws");

// Some more tests.
imdb.detachObserver(mathieu);
imdb.addMovie("Die Hard"); // Mathieu won't notified about the imdb subject state change this time.