import { readable } from 'svelte/store';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const getInitialMotionPreference = () => window.matchMedia(reducedMotionQuery).matches;

// function handlePreferenceChange(event: MediaQueryListEvent) {
// 	console.log(`prefers-reduced-motion: reduce is ${event.matches ? 'enabled' : 'disabled'}`);
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function perfersReducedMotion() {
// 	const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
// 	mediaQueryList.addEventListener('change', handlePreferenceChange);
// 	return mediaQueryList.matches;
// }

export const reducedMotion = readable(getInitialMotionPreference(), (set) => {
	const updateMotionPreference = (event: MediaQueryListEvent) => {
		set(event.matches);
	};

	const mediaQueryList = window.matchMedia(reducedMotionQuery);
	mediaQueryList.addEventListener('change', updateMotionPreference);

	return () => {
		mediaQueryList.removeEventListener('change', updateMotionPreference);
	};
});
