// import * as uses from '../data/uses.json';

/** @type {import('./').RequestHandler} */
export async function get() {
	const response = await import('../data/uses.json');
	const uses = response.default;

	return {
		status: 200,
		body: { uses }
	};
}
