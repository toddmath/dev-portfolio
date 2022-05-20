import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import * as path from 'path';
import { imagetools } from 'vite-imagetools';
// import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: [
	// 	preprocess(),
	// 	image({
	// 		sizes: [200, 400, 800, 1200, 1600]
	// 		// processFolders: ['src/assets']
	// 	})
	// 	// mdsvex(mdsvexConfig)
	// ],

	// preprocess: [preprocess()],
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [imagetools()],
			resolve: {
				alias: {
					$assets: path.resolve('src/assets'),
					$store: path.resolve('src/store'),
					$components: path.resolve('src/components')
				}
			}
		},

		paths: {
			assets: path.resolve('src/assets')
		}
	}
};

export default config;
