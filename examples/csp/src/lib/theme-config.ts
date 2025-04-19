import type { Config } from '@sejohnson/svelte-themes';

export const themeConfig: Config = {
	attribute: 'data-theme',
	storageKey: 'theme',
	enableColorScheme: true,
	defaultTheme: 'light',
	enableSystem: false,
	themes: ['light', 'dark-classic', 'tangerine', 'dark-tangerine', 'mint', 'dark-mint']
};
