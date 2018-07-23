import { Observer } from "./observer"
import { Subject } from "./subject"

export class HumanObserver implements Observer {
	constructor(private name: string) {}

	public notify(value?: any, subject?: Subject) {
		console.log(this.name, "received", value, "from", subject);
	}
}