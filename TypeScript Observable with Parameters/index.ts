import { IMDB } from "./imdb"
import { HumanObserver } from "./humanObserver"

let imdb: IMDB = new IMDB();
let mathieu: HumanObserver = new HumanObserver("Mathieu");
imdb.attachObserver(mathieu);
imdb.addMovie("Jaws");
