import type { Handle } from '@sveltejs/kit';
import { themeScript } from '@sejohnson/svelte-themes';
import { themeConfig } from '$lib/theme-config';

export const handle = (async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace(
				'//svelte-themes.script//',
				`(${themeScript.toString()})(${JSON.stringify(themeConfig)})`
			);
		}
	});
}) satisfies Handle;
