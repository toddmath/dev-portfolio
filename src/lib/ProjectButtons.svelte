<script lang="ts">
	import { GithubIcon, ExternalLinkIcon } from 'svelte-feather-icons';
	import Button from '$lib/Button.svelte';

	export let ext: string = '';
	export let github: string = '';
	export let type:
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'ghost'
		| 'info'
		| 'success'
		| 'warning'
		| 'error'
		| null = null;
	export let shape: 'square' | 'circle' | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let wide: boolean = false;
	export let block: boolean = false;

	function notEmpty(value: string): boolean {
		return value !== '' && value.length > 0;
	}
</script>

{#if notEmpty(ext) && notEmpty(github)}
	<div
		class="btn-group shadow-sm my-0 overflow-hidden rounded-btn"
		class:rounded-full={shape === 'circle'}
	>
		{#if notEmpty(ext)}
			<Button tag="a" {type} {shape} {size} {wide} {block} target="_blank" href={ext}
				><ExternalLinkIcon /></Button
			>
		{/if}
		{#if notEmpty(github)}
			<Button tag="a" {type} {shape} {size} {wide} {block} target="_blank" href={github}
				><GithubIcon /></Button
			>
		{/if}
	</div>
{:else if notEmpty(ext)}
	<Button tag="a" {type} {shape} {size} {wide} {block} target="_blank" href={ext}
		><ExternalLinkIcon /></Button
	>
{:else if notEmpty(github)}
	<Button tag="a" {type} {shape} {size} {wide} {block} target="_blank" href={github}
		><GithubIcon /></Button
	>
{/if}
