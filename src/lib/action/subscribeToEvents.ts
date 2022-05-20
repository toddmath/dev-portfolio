import type { Action } from './types';

export const subsribeToEvents: Action<object> = (node, parameters) => {
	let latestParams: typeof parameters;

	const update = (newParams: typeof parameters) => {
		// if (latestParams) {
		// 	for (const [eventName, cb] of latestParams.entries()) {
		// 		node.removeEventListener(eventName, cb);
		// 	}
		// }
		if (newParams) {
			latestParams = newParams;
			for (const [eventName, cb] of Object.entries(latestParams)) {
				node.addEventListener(eventName, cb);
			}
		}
	};

	update(parameters);

	const destroy = () => {
		if (latestParams) {
			for (const [eventName, cb] of Object.entries(latestParams)) {
				node.removeEventListener(eventName, cb);
			}
		}
	};

	return {
		update,
		destroy
	};
};
