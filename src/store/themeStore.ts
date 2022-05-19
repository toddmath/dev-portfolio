import { persistentWritable } from './persistentStore';

export type ThemeMode = 'light' | 'dark' | 'system';

// export const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// const darkModeEnabled = prefersDarkMode.matches;

export const themeStore = persistentWritable<ThemeMode>(
	'theme',
	'system'
	// prefersDarkMode.matches ? 'dark' : 'light'
);

// const updateThemeOnChange = (e: MediaQueryListEvent) => {
// 	console.log(`system theme changed to: ${e.matches ? 'dark' : 'light'}`);
// 	return themeStore.set(e.matches ? 'dark' : 'light');
// };

// themeStore.subscribe((sub) => {
// 	if (sub === 'system') {
// 		console.log('subsribing theme mode to system');
// 		prefersDarkMode.addEventListener('change', updateThemeOnChange);
// 	} else {
// 		console.log('unsubsribing theme mode from system');
// 		prefersDarkMode.removeEventListener('change', updateThemeOnChange);
// 	}
// });

// prefersDarkMode.addEventListener('change', (event) => {
// 	console.log(`Theme changed to: ${event.matches ? 'dark' : 'light'}`);
// 	updateThemeOnChange(event);
// });
