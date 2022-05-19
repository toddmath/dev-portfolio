<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Drawer from '$lib/Drawer.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	// import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	// import { theme } from '$store/theme';

	onMount(() => {
		themeChange(false);
	});
</script>

<!-- <svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
</svelte:head> -->

<!-- <svelte:window class={$theme} /> -->

<Drawer>
	<svelte:fragment slot="navbar">
		<Nav />
	</svelte:fragment>

	<svelte:fragment slot="content">
		<main class="h-full w-full relative row-span-1 row-start-2">
			<slot />
		</main>

		<Footer />
	</svelte:fragment>
</Drawer>
