import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'default-src': ['self'],
				'script-src': ['self'],
				'style-src': ['self'],
				'img-src': ['self'],
				'connect-src': ['self'],
				'font-src': ['self'],
				'media-src': ['self'],
				'form-action': ['self'],
				'base-uri': ['self'],
				'manifest-src': ['self'],
				'worker-src': ['self'],
				'frame-src': ['self'],
				'object-src': ['self']
			}
		}
	}
};

export default config;
