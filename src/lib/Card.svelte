<script lang="ts">
	import { fly, fade, blur } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { cubicOut, cubicIn } from 'svelte/easing';
	import TechList from '$lib/TechList.svelte';
	import ProjectButtons from '$lib/ProjectButtons.svelte';
	import { prettyDate } from '$lib/action/prettyDate';

	type Dir = 'top' | 'bottom' | 'middle';

	export let imgSrc = '';
	export let ext = '';
	export let github = '';
	export let imgDir: Dir = 'top';
	export let title = '';
	export let tech = [] as string[];
	export let date = '';
	export let index = 0;

	let delay = index * 200;

	const imgScale = spring(1, { stiffness: 0.2 });
</script>

<article
	in:fly={{ duration: 500, y: 200, delay, easing: cubicIn }}
	out:fade={{ duration: 200, easing: cubicOut }}
	on:mouseover={() => ($imgScale = 1.1)}
	on:focus={() => ($imgScale = 1.1)}
	on:mouseleave={() => ($imgScale = 1)}
	on:blur={() => ($imgScale = 1)}
	class="card-component card justify-between bg-base-100 transition-all border-2 border-base-content shadow-base-content"
>
	{#if imgDir == 'top'}
		<!-- <div class="image-container overflow-hidden block border-b-4 border-base-content"> -->
		<figure class="border-b-4 border-base-content">
			<a
				href={ext}
				target="_blank"
				rel="noopener noreferrer"
				alt="Demo of {title}"
				title="Demo of {title}"
				class="block"
			>
				<img
					in:blur={{ duration: 325, delay: delay + 200, easing: cubicIn }}
					src={imgSrc}
					alt={title}
					class="will-change-transform block object-cover w-full h-auto"
					style:transform="scale({$imgScale})"
				/>
			</a>
		</figure>
		<!-- </div> -->

		<h2
			in:fade={{ duration: 325, delay: delay + 350, easing: cubicIn }}
			class="font-semibold mt-4 mb-2 flex gap-x-2 justify-between items-center flex-wrap"
		>
			{title}
			<time
				use:prettyDate={{ timestamp: date }}
				class="badge badge-sm flex w-max flex-grow-0 flex-shrink"
			/>
		</h2>

		<slot name="description" />
		<TechList {tech} delay={delay + 325} />

		<footer class="flex justify-end items-center">
			<ProjectButtons {github} {ext} />
		</footer>
	{:else if imgDir == 'middle'}
		<h2 class="font-semibold mt-4 mb-2 flex gap-x-2 justify-between items-center flex-wrap">
			{title}
			<time
				use:prettyDate={{ timestamp: date }}
				class="badge badge-sm flex w-max flex-grow-0 flex-shrink"
			/>
		</h2>

		<img src={imgSrc} alt={title} class="object-cover w-full h-auto mt-4" />

		<slot name="description" />
		<TechList {tech} />

		<footer class="flex justify-end items-center">
			<ProjectButtons {github} {ext} />
		</footer>
	{:else}
		<!-- image is at bottom -->
		<h2 class="font-semibold mt-4 mb-2 flex gap-x-2 justify-between items-center flex-wrap">
			{title}
			<time
				use:prettyDate={{ timestamp: date }}
				class="badge badge-sm flex w-max flex-grow-0 flex-shrink"
			/>
		</h2>

		<slot name="description" />
		<TechList {tech} />

		<footer class="flex justify-end items-center">
			<ProjectButtons {github} {ext} />
		</footer>
		<img src={imgSrc} alt={title} class="object-cover w-full h-auto rounded-b-box mt-4" />
	{/if}
</article>

<style>
	/* .image-container { */
	figure {
		overflow: hidden;
		perspective-origin: center;
		perspective: 5000rem;
	}

	img {
		aspect-ratio: var(--img-ratio, 3/2);
	}

	/* :global(.card-component > :last-of-type:not(img, h2, h3, h4, .image-container, figure)) { */
	:global(.card-component > :last-of-type:not(img, h2, h3, h4, figure)) {
		margin-bottom: var(--space-s, 1rem);
	}

	h2 {
		font-size: var(--step-1);
	}

	:global(.card-component > :not(img, .image-container, figure)) {
		margin-inline: var(--space-s, 1rem);
	}

	.card-component {
		box-shadow: 4px 4px var(--tw-shadow-color, #000000);
	}
</style>
