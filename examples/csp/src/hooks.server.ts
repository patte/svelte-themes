import type { Handle } from '@sveltejs/kit';
import { scriptAsString } from '@sejohnson/svelte-themes';
import { themeConfig } from '$lib/theme-config';

export const handle = (async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('//svelte-themes.script//', scriptAsString(themeConfig));
		}
	});
}) satisfies Handle;
