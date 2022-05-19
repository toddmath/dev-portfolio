<svelte:options immutable />

<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { get } from './';

	type Params = Record<string, string>;

	type InputProps = NonNullable<Awaited<ReturnType<typeof get>>['body']>;
	type OutputProps = InputProps;

	export const load: Load<Params, InputProps, OutputProps> = async ({ props }) => {
		return {
			props: {
				uses: props.uses
			}
		};
	};
</script>

<script lang="ts">
	// import { hardware, software } from '../data/uses.json';
	import type { Uses } from './';
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { ExternalLinkIcon } from 'svelte-feather-icons';
	import Section from '$lib/Section.svelte';
	import Button from '$lib/Button.svelte';

	interface $$Props extends OutputProps {}

	export let uses: Uses;

	let { hardware, software } = uses;
</script>

<svelte:head>
	<title>Uses - Todd Matheson</title>
</svelte:head>

<!-- <Section
	id="uses"
	title="Technologies I Use"
	class="bg-gradient-to-b from-base-300 to-neutral"
	titleClass="text-base-content"
> -->
<Section
	id="uses"
	title="Technologies I Use"
	class="bg-gradient-to-br from-base-300 to-base-200"
	titleClass="text-base-content"
>
	<div class="main-grid grid grid-cols-1 lg:grid-cols-2 w-full container rounded-box">
		<article class="card card-compact md:card-normal w-full">
			<div class="card-body p-0">
				<h2
					class="card-title uppercase tracking-wide text-center w-full justify-center text-neutral font-bold"
				>
					Hardware
				</h2>

				<div class="grid grid-cols-1 grid-rows-3 gap-l">
					{#each Object.keys(hardware) as subCategory, i}
						{@const data = hardware[subCategory]}
						<section
							in:fly={{ duration: 500, x: -200, delay: i * 200 + 100, easing: cubicIn }}
							class="transition-all flex-1 basis-1/3 h-full card bg-gradient-to-r from-primary to-secondary p-3 shadow-lg hover:shadow"
						>
							<div class="bg-neutral text-neutral-content rounded-box card-body">
								<h3 class="card-title font-semibold capitalize text-primary gap-4">
									{data.name} <span class="badge badge-primary">{data.year}</span>
								</h3>
								<p>{data.description}</p>
								<div class="card-actions justify-end">
									<Button tag="a" target="_blank" href={data.link} type="secondary" shape="circle"
										><ExternalLinkIcon /></Button
									>
								</div>
							</div>
						</section>
					{/each}
				</div>
			</div>
		</article>

		<article class="card card-compact md:card-normal w-full">
			<div class="card-body p-0">
				<h2
					class="card-title uppercase tracking-wide text-center w-full justify-center text-neutral font-bold"
				>
					Software
				</h2>

				<div class="grid grid-cols-1 grid-rows-3 gap-l">
					{#each Object.keys(software) as subCategory, i}
						{@const data = software[subCategory]}
						<section
							in:fly={{ duration: 500, x: 200, delay: i * 200 + 100, easing: cubicIn }}
							class="transition-all flex-1 basis-1/3 h-full card bg-gradient-to-r from-primary to-secondary p-3 shadow-lg hover:shadow"
						>
							<div class="bg-neutral text-neutral-content rounded-box card-body">
								<h3 class="card-title font-semibold capitalize text-primary">
									{data.name}
								</h3>
								<p>{data.description}</p>
								<div class="card-actions justify-end">
									<Button tag="a" target="_blank" href={data.link} type="secondary" shape="circle"
										><ExternalLinkIcon /></Button
									>
								</div>
							</div>
						</section>
					{/each}
				</div>
			</div>
		</article>
	</div>
</Section>

<style>
	h2.card-title {
		font-size: var(--step-3);
	}
	h3.card-title {
		font-size: var(--step-2);
	}

	article > .card-body,
	.gap-l {
		gap: var(--space-l);
	}

	section > .card-body {
		gap: var(--space-s);
	}

	/* .main-grid {
		gap: var(--space-s);
	} */

	.main-grid > .card {
		gap: var(--space-xl);
	}

	p {
		max-width: 60ch;
	}
</style>
