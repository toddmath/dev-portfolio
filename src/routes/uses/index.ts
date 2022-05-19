import type { RequestHandler } from '@sveltejs/kit';
import * as uses from '../data/uses.json';
// import { hardware, software } from '../data/uses.json';

type Params = Record<string, string>;

export type Uses = typeof uses;

// type Output = {
// 	software: typeof uses["software"];
// 	hardware: typeof uses["hardware"];
// };

export const get: RequestHandler<Params, { uses: Uses }> = async () => {
	return {
		status: 200,
		body: { uses }
	};
};
