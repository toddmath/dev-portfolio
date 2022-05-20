<script lang="ts">
	import { GithubIcon, ExternalLinkIcon } from 'svelte-feather-icons';
	import { prettyDate } from './action/prettyDate';

	export let title = '';
	export let date = '';
	export let externalLink = '';
	export let githubLink = '';
	export let imageSrc = '';
</script>

<article
	class="transition ease-out col-span-1 card image-full shadow-2xl w-full h-auto before:transition-all before:mix-blend-normal hover:before:bg-primary/50 hover:before:mix-blend-screen overflow-hidden text-neutral-content hover:text-primary-content md:hover:scale-105"
>
	<!-- <article class="transition ease-out col-span-1 card image-full shadow-2xl w-full max-w-prose before:transition-all before:bg-primary/90 before:mix-blend-screen overflow-hidden text-neutral-content hover:text-primary-content md:hover:scale-105"> -->
	<!-- <figure><Image src={imageSrc} alt={title} wrapperClass="h-full w-full object-cover" class="block object-cover object-top w-auto h-full" /></figure> -->
	<figure>
		<img src={imageSrc} alt={title} class="object-cover block object-top w-full h-full" />
	</figure>
	<div class="card-body text-current hover:text-primary-content">
		<header class="mb-4">
			<h2 class="card-title text-2xl flex-grow justify-between flex-wrap">
				{title}
				<time
					use:prettyDate={{ timestamp: date }}
					class="badge badge-secondary badge-sm flex h-full w-max flex-grow-0 justify-end justify-self-end flex-shrink"
				/>
			</h2>
		</header>
		<slot name="description" />
		<slot name="tech" />
		<footer class="card-actions justify-end items-center">
			<div class="btn-group bg-secondary rounded-xl shadow-lg">
				{#if externalLink}
					<a class="btn btn-ghost" target="_blank" href={externalLink}><ExternalLinkIcon /></a>
				{/if}
				{#if githubLink}
					<a class="btn btn-ghost" target="_blank" href={githubLink}><GithubIcon /></a>
				{/if}
			</div>
		</footer>
	</div>
</article>

<style>
	article {
		flex: 1 1 var(--min, 30ch);
		/* aspect-ratio: var(--aspect-ratio); */
	}

	/*  img { */
	/* 	aspect-ratio: var(--aspect-ratio); */
	/* } */
</style>
