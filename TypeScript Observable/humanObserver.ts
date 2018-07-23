import { Observer } from "./observer"

export class HumanObserver implements Observer {
	constructor(private name: string) {}

	notify() {
		console.log(this.name, "Notified");
	}
}