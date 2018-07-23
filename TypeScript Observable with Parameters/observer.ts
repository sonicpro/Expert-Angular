import { Subject } from "./subject"

export interface Observer {
	// Notify method is extended with additional parameters.
	notify(value?: any, subject?: Subject);
}
