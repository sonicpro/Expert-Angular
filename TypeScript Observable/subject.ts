// A class that manages a number of Observer instances.
import { Observer } from "./observer";

export class Subject{
	private observers: Observer[] = [];

	// Add an observer.
	attachObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	// Remove observer
	detachObserver(observer: Observer): void {
		let index: number = this.observers.indexOf(observer);
		if (index >= 0) {
			this.observers.splice(index, 1);
		} else {
			throw "Unknown observer";
		}
	}

	// Notify the observers of the state change
	protected notifyObservers(){
		// Invoke the oberver's own notify() impementation.
		for (var i = 0; i < this.observers.length; ++i) {
			this.observers[i].notify();
		}
	}
}