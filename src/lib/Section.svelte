<script lang="ts">
	import { fade } from 'svelte/transition';
	import Title from './Title.svelte';
	export let title = '';
	export let id = '';

	export let titleClass = '';
	export let titleTag: `h${1 | 2 | 3}` = 'h1';
	let className = '';
	export { className as class };
</script>

<section
	out:fade
	{id}
	class="h-full w-full flex flex-col flex-wrap justify-center items-center gap-y-8 {className}"
>
	<!-- <header
		class="px-6 sm:px-4 lg:px-20 relative w-full md:max-w-screen-lg lg:max-w-screen-xl flex-shrink-0 flex-grow-0 basis-20 flex items-center rounded-lg {titleClass}"
	> -->
	<header class="relative text-center w-full flex-initial flex items-center {titleClass}">
		<Title tag={titleTag}>{title}</Title>
	</header>

	<slot />
</section>

<style>
	section {
		padding: var(--space-m);
		/* margin-top: var(--space-m); */
		gap: var(--space-xl);
	}
</style>
