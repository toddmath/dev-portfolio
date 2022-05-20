<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { CodeIcon } from 'svelte-feather-icons';

	import Section from '$lib/Section.svelte';
	import { container } from '$lib/action/container';

	let technologies = [
		'Javascript (ES6+)',
		'Typescript',
		'Advanced CSS & Sass',
		'HTML5',
		'React',
		'Redux',
		'Node.js',
		'Express',
		'GraphQL',
		'Rust',
		'Lua',
		'Go'
	];
</script>

<svelte:head>
	<title>About - Todd Matheson</title>
</svelte:head>

<Section title="About Me" id="about">
	<div
		use:container={{
			xsmall: 0,
			small: 200,
			'image-full': 400,
			large: 500
		}}
		in:fade={{ duration: 300, easing: cubicIn }}
		out:fade={{ duration: 200, easing: cubicOut }}
		class="transition-all card card-normal lg:card-side bg-base-100 mx-auto justify-center max-w-2xl lg:max-w-6xl skew-x-0 lg:-skew-x-6 hover:skew-x-0 border-4 border-base-content shadow-base-content"
	>
		<figure
			in:fly={{ duration: 300, x: -150, delay: 250, easing: cubicIn }}
			out:fade={{ duration: 200, easing: cubicOut }}
			class="transition-all flex-shrink flex-grow basis-20 md:basis-1/3 skew-x-0 translate-x-0 lg:skew-x-6 lg:-translate-x-6"
		>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="profile.jpeg"
				alt="Todd's profile picture"
				class="block w-auto object-cover h-auto md:w-full md:h-full border-base-content border-b-4 lg:border-r-4"
			/>
		</figure>

		<div
			in:fly={{ duration: 300, y: -200, delay: 250, easing: cubicIn }}
			out:fade={{ duration: 200, easing: cubicOut }}
			class="transition-all card-body prose mx-auto gap-y-0 lg:pl-0 skew-x-0 lg:skew-x-6 translate-x-0 lg:-translate-x-6 border-base-content"
		>
			<h2 in:fly={{ duration: 300, x: 150, delay: 550, easing: cubicIn }} class="card-title">
				Hi, I'm Todd Matheson.
			</h2>
			<p>
				I'm a passionate, <a
					class="link link-primary"
					href="https://www.geeksforgeeks.org/what-is-full-stack-development/"
					>full stack web developer</a
				>
				based in
				<a class="link link-primary" href="https://goo.gl/maps/BXFweUd8MrrYuSAZ7"
					>Silicon Valley, California</a
				>. I love creating software that spands across the internet. I develop modern websites and
				web apps that provide aesthetic, easy to navigate user interfaces written with the most
				modern tooling and frameworks.
			</p>

			<div class="card-actions flex-col">
				<p class="prose-p text-center self-center mb-3">
					Here are a few technologies I've been working with recently:
				</p>

				<ul class="flex flex-wrap justify-center gap-2 md:gap-3 prose-ul px-0">
					{#each technologies as tech, i}
						<li
							in:fly={{ duration: 200, x: 100, delay: i * 125 + 200, easing: cubicOut }}
							class="list-none font-medium w-max h-4 gap-2 flex badge badge-sm md:badge-md py-2 md:py-2 m-0"
						>
							<span class="align-center gap-2">
								<CodeIcon size="18" strokeWidth={2.5} />
							</span>
							{tech}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</Section>

<style>
	.card {
		box-shadow: 4px 4px var(--tw-shadow-color, #000000);
	}

	:global(.card.large img) {
		object-position: center 18%;
		aspect-ratio: 18 / 9;
	}

	.card:hover figure,
	.card:hover .card-body {
		--tw-skew-x: 0deg;
	}

	.card-title {
		font-size: var(--step-3);
	}

	.card-body {
		padding: var(--space-m);
	}

	ul {
		font-size: var(--step--1);
	}
</style>
