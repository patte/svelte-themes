import type { ResolvedConfig } from '@sejohnson/svelte-themes';

export const themeConfig: ResolvedConfig = {
	attribute: 'data-theme',
	storageKey: 'theme',
	enableColorScheme: true,
	disableTransitionOnChange: false,
	defaultTheme: 'light',
	enableSystem: false,
	themes: ['light', 'dark-classic', 'tangerine', 'dark-tangerine', 'mint', 'dark-mint']
};
