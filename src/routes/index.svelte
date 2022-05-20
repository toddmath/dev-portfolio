<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import Button from '$lib/Button.svelte';

	let scroll = 0;
	let width = 0;
	let height = 0;

	const mouse = spring(
		{ x: 0, y: 0, bx: 50, by: 50 },
		{
			stiffness: 0.06,
			damping: 0.4
		}
	);

	const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
		mouse.set({
			x: Math.trunc(clientX),
			y: Math.trunc(clientY),
			bx: (clientX - width) / 150 + 60,
			by: (clientY - height) / 150 + 60
		});
	};

	const onMouseLeave = (_: MouseEvent) => {
		mouse.set({ x: 0, y: 0, bx: 50, by: 50 });
	};
</script>

<svelte:head>
	<title>Todd's Dev Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={scroll} bind:innerWidth={width} />

<svelte:body on:mousemove={onMouseMove} on:mouseleave={onMouseLeave} />

<section
	bind:clientHeight={height}
	transition:fade
	class="transition-all hero h-full text-secondary relative px-4 cover bg-no-repeat bg-center"
>
	<div
		class="hero-overlay bg-gradient-to-br from-primary to-secondary opacity-50 mix-blend-darken"
	/>
	<header
		in:fly={{ duration: 400, x: -300, easing: cubicIn }}
		out:fly={{ duration: 400, x: 300, easing: cubicOut }}
		class="will-change-transform hero-content p-0 text-center card bg-base-100 text-base-content origin-center rounded-box border-4 border-base-content shadow-base-content"
		style:transform={$mouse.x === 0 && $mouse.y === 0
			? 'translate3d(0, 0, 0)'
			: `translate3d(${$mouse.x / 80}px, ${$mouse.y / 80}px, 0)`}
	>
		<div
			in:fly={{ duration: 400, x: -100, delay: 225, easing: cubicOut }}
			out:fly={{ duration: 400, x: 100, easing: cubicOut }}
			class="card-body rounded-box origin-center"
			style:transform={$mouse.x === 0 && $mouse.y === 0
				? 'translate3d(0, 0, 0)'
				: `translate3d(${$mouse.x / 160}px, ${$mouse.y / 160}px, 0)`}
		>
			<h1 class="card-title flex-col font-semibold">
				Hi, I'm Todd Matheson.<span class="font-bold italic"
					>I build beautiful & modern websites and web-apps.</span
				>
			</h1>

			<p
				in:fly={{ duration: 250, x: -125, delay: 275, easing: cubicOut }}
				out:fly={{ duration: 250, x: 125, easing: cubicOut }}
				class="leading-8 max-w-prose"
			>
				I'm a front end web developer based in San Mateo, CA specializing in building exceptional,
				high-quality websites & web apps.
			</p>

			<div
				in:fly={{ duration: 350, x: -150, delay: 350, easing: cubicOut }}
				out:fade={{ duration: 200, easing: cubicOut }}
				class="card-actions justify-center"
			>
				<Button
					tag="a"
					prefetch
					href="/projects"
					size="xl"
					type="neubrutal"
					class="transition px-10 font-extrabold gap-2 bg-gradient-to-r from-primary to-secondary box-border hover:border-primary-content"
				>
					Checkout My Projects<ArrowRightIcon strokeWidth={3} /></Button
				>
			</div>
		</div>
	</header>
</section>

<style>
	section {
		background-image: url('/nathan-watson-unsplash_3000x2000_36.avif');
	}

	header {
		box-shadow: 4px 4px var(--tw-shadow-color, #000000);
	}

	.card-body {
		padding-inline: var(--space-l);
		padding-block: var(--space-xl);
		gap: var(--space-m);
	}

	h1 {
		font-size: var(--step-4);
		gap: var(--space-s);
	}

	h1 > span {
		font-size: var(--step-3);
	}
</style>
