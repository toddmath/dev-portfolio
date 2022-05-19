<script context="module" lang="ts">
	/** @type {import('@sveltekit/kit').ErrorLoad} */
	export const load: ErrorLoad = ({ error, status }) => ({
		props: {
			error,
			status,
			title: `${status}: ${error.message}`
		}
	});
</script>

<script lang="ts">
	import { dev } from '$app/env';
	import type { ErrorLoad } from '@sveltejs/kit';

	export let title: string;
	export let error: Error;
	export let status: number;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="w-full self-center space-y-8 flex flex-col">
	<h1>{status}</h1>
	<p class="text-red-500">{error.message}</p>

	{#if dev && error.stack}
		<pre class="font-mono text-red-500">{error.stack}</pre>
	{/if}
</div>
