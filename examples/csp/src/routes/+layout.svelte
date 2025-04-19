<script lang="ts">
	import { themeConfig } from '$lib/theme-config';
	import '../app.css';
	import { ThemeProvider } from '@sejohnson/svelte-themes';

	let { children } = $props();
</script>

<div class="min-h-dvh">
	<ThemeProvider {...themeConfig} disableScriptInjection>
		{@render children?.()}
	</ThemeProvider>
</div>
