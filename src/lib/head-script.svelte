<script lang="ts">
	import type { ResolvedConfig } from './config.js';
	import { scriptAsString, type ScriptConfig } from './dom.js';

	// This script is used to set the initial theme state based on the user's saved preferences.
	// It allows us to avoid FOUC.

	let {
		attribute,
		storageKey,
		defaultTheme,
		themes,
		domValues,
		enableSystem,
		enableColorScheme,
		scriptProps,
		forcedTheme
	}: ScriptConfig & Pick<ResolvedConfig, 'scriptProps'> = $props();

	let scriptAttributes = $derived.by(() => {
		if (!scriptProps) return '';
		let str = '';
		for (const [key, value] of Object.entries(scriptProps)) {
			str += `${key}="${value}" `;
		}
		return str;
	});

	const scriptBody = $derived(
		scriptAsString({
			attribute,
			storageKey,
			defaultTheme,
			themes,
			domValues,
			enableSystem,
			enableColorScheme,
			forcedTheme
		})
	);
</script>

<svelte:head>
	{@html `
		<script ${scriptAttributes}>
			${scriptBody}
		</script>
	`}
</svelte:head>
