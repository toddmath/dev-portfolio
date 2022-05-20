<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy } from 'svelte';
	// import { fade } from 'svelte/transition';
	// import { quintOut } from 'svelte/easing';
	import { SunIcon, MoonIcon } from 'svelte-feather-icons';
	// import { get } from 'svelte/store'
	import { themeStore } from '../store/themeStore';

	let dark = false;
	let unsubscribe: VoidFunction;
	$: if (browser)
		unsubscribe = themeStore.subscribe((theme) => {
			dark = theme === 'dark' ? true : false;
			const html = document.documentElement;
			const htmlClass = html.className
				.split(' ')
				.filter((word) => word !== 'dark' && word !== 'light')
				.join(' ');
			if (html) {
				html.className = htmlClass + ' ' + theme;
			}
		});

	const toggleTheme = () => {
		if (browser) themeStore.set(dark ? 'light' : 'dark');
		// $themeStore = dark ? "light" : "dark";
	};

	// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

	// const checkLocalTheme = (): boolean => {
	// 	const localTheme = localStorage.getItem('theme');
	// 	if (localTheme) {
	// 		return (localTheme === 'dark' && dark) || (localTheme === 'light' && !dark);
	// 	}
	// 	return false;
	// }

	// function toggleTheme() {
	// 	dark = !dark;
	// 	if (browser) {
	// 		const html = document.getElementsByTagName('html').item(0);
	// 		const htmlClass = 'scroll-smooth antialiased leading-relaxed';
	// 		const mode = dark ? 'dark' : 'light';
	//
	// 		if (html) {
	// 			if (!html.classList.contains(mode)) {
	// 				html.className = htmlClass + ' ' + mode;
	// 			} else if (html.className === '' || !html.className) {
	// 				html.className = htmlClass;
	// 			}
	// 		}
	//
	// 		let localTheme = localStorage.getItem('theme');
	// 		if (localTheme !== mode || !localTheme) {
	// 			localStorage.setItem('theme', mode);
	// 		}
	// 	}
	// }

	// $: d = dark
	//   ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
	// : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";

	// const onWindowMediaChange = (e: MediaQueryListEvent) => {
	// 	if (dark !== e.matches) toggleTheme();
	// }

	// onMount(() => {
	// 	if (!checkLocalTheme()) toggleTheme();
	// 	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onWindowMediaChange);
	// });

	onDestroy(() => browser && unsubscribe());
	// onDestroy(() => {
	// 	if (browser) {
	// 		window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onWindowMediaChange);
	// 	}
	// })
  
// class="btn btn-square btn-outline btn-info transition-all duration-200 grid place-items-center w-10 h-10 md:w-11 md:h-11 outline-offset-4 bg-neutral-200 rounded-full shadow-zinc-500/60 shadow-inner hover:shadow-zinc-500/75 dark:shadow-zinc-900/70 dark:bg-zinc-700 border border-transparent dark:border-zinc-800"
</script>

<svelte:head>
	<meta name="color-scheme" content={dark ? 'dark light' : 'light dark'} />
</svelte:head>

<button
	on:click={toggleTheme}
	id="theme-toggle"
	title="Toggles light & dark"
	aria-label={dark ? 'dark' : 'light'}
	aria-live="polite"
	type="button"
	class="btn btn-square btn-outline"
>
	<!-- {#if dark} -->
	<div class="hidden dark:block">
		<SunIcon
			class="opacity-0 dark:opacity-100 text-zinc-700 dark:text-zinc-200 m-0"
			size="1.5x"
			strokeWidth={1.75}
		/>
	</div>
	<!-- {:else} -->
	<div class="block dark:hidden">
		<MoonIcon
			class="dark:hidden opacity-100 dark:opacity-0 text-zinc-700 dark:text-zinc-200 m-0"
			size="1.5x"
			strokeWidth={1.75}
		/>
	</div>
	<!-- {/if} -->

	<!-- <svg -->
	<!-- 	xmlns="http://www.w3.org/2000/svg" -->
	<!-- 	aria-hidden="true" -->
	<!-- 	viewBox="0 0 24 24" -->
	<!-- 	fill="currentColor" -->
	<!-- 	stroke="currentColor" -->
	<!-- 	stroke-linecap="round" -->
	<!-- 	class="sun-and-moon w-full h-full text-zinc-700 dark:text-zinc-200" -->
	<!-- > -->

	<!-- {#if dark} -->
	<!-- 	<circle -->
	<!-- 		class="sun duration-250 transition-all origin-center scale-150" -->
	<!-- 		cx="12" -->
	<!-- 		cy="12" -->
	<!-- 		r="6" -->
	<!-- 		mask="url(#moon-mask)" -->
	<!-- 		fill="currentColor" -->
	<!-- 	/> -->
	<!-- 	<g -->
	<!-- 		class="sun-beams duration-150 origin-center -rotate-45 opacity-0" -->
	<!-- 		stroke="currentColor" -->
	<!-- 		stroke-width="2px" -->
	<!-- 	> -->
	<!-- 		<line x1="12" y1="1" x2="12" y2="3" /> -->
	<!-- 		<line x1="12" y1="21" x2="12" y2="23" /> -->
	<!-- 		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /> -->
	<!-- 		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /> -->
	<!-- 		<line x1="1" y1="12" x2="3" y2="12" /> -->
	<!-- 		<line x1="21" y1="12" x2="23" y2="12" /> -->
	<!-- 		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /> -->
	<!-- 		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /> -->
	<!-- 	</g> -->
	<!-- 	<mask class="moon origin-center" id="moon-mask"> -->
	<!-- 		<rect x="0" y="0" width="100%" height="100%" fill="white" /> -->
	<!-- 		<circle cx="24" cy="10" r="6" fill="black" class="delay-75 duration-250 -translate-x-2" /> -->
	<!-- 	</mask> -->
	<!-- {:else} -->
	<!-- 	<circle -->
	<!-- 		class="sun duration-500 transition-transform origin-center" -->
	<!-- 		cx="12" -->
	<!-- 		cy="12" -->
	<!-- 		r="6" -->
	<!-- 		mask="url(#moon-mask)" -->
	<!-- 		fill="currentColor" -->
	<!-- 	/> -->
	<!-- 	<g -->
	<!-- 		class="sun-beams duration-500 transition-all origin-center" -->
	<!-- 		stroke="currentColor" -->
	<!-- 		stroke-width="2px" -->
	<!-- 	> -->
	<!-- 		<line x1="12" y1="1" x2="12" y2="3" /> -->
	<!-- 		<line x1="12" y1="21" x2="12" y2="23" /> -->
	<!-- 		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /> -->
	<!-- 		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /> -->
	<!-- 		<line x1="1" y1="12" x2="3" y2="12" /> -->
	<!-- 		<line x1="21" y1="12" x2="23" y2="12" /> -->
	<!-- 		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /> -->
	<!-- 		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /> -->
	<!-- 	</g> -->
	<!-- 	<mask class="moon origin-center" id="moon-mask"> -->
	<!-- 		<rect x="0" y="0" width="100%" height="100%" fill="white" /> -->
	<!-- 		<circle cx="24" cy="10" r="6" fill="black" class="-translat-x-2" /> -->
	<!-- 	</mask> -->
	<!-- {/if} -->

	<!-- {#key d} -->
	<!--   <path transition:fade="{{duration: 500, easing: quintOut}}" stroke-linecap="round" stroke-linejoin="round" stroke-width={2} {d}></path> -->
	<!-- {/key} -->
	<!-- </svg> -->
</button>
