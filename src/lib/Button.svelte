<svelte:options immutable={true} />

<script lang="ts">
	import Ripple from '$lib/action/ripple';

	export let tag: 'button' | 'a' = 'button';
	export let type:
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'success'
		| 'info'
		| 'warning'
		| 'error'
		| 'link'
		| 'ghost'
		| 'neubrutal'
		| null = null;
	export let shape: 'square' | 'circle' | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let wide: boolean = false;
	export let block: boolean = false;
	export let active: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let noAnimation: boolean = false;
	export let href = '';
	export let prefetch = false;
	let className = '';
	// export let className = '';
	export let target: string | null = null;

	export { className as class };

	// let _class: string = `${className} btn btn-${type} ${shape ? 'btn-' + shape : ''} ${
	// 	size ? 'btn-' + size : ''
	// } ${block ? 'btn-block' : ''} ${wide ? 'btn-wide' : ''}`;

	// $: {
	// 	_class = `${className} btn btn-${type} ${shape ? 'btn-' + shape : ''} ${
	// 		size ? 'btn-' + size : ''
	// 	} ${block ? 'btn-block' : ''} ${wide ? 'btn-wide' : ''}`;
	// }
</script>

{#if tag === 'a'}
	{#if prefetch}
		<a
			sveltekit:prefetch
			{href}
			class="btn {type === 'neubrutal'
				? 'shadow-primary-content text-primary-content border-primary-content border-2'
				: ''} {className}"
			class:btn-xs={size === 'xs'}
			class:btn-sm={size === 'sm'}
			class:btn-md={size === 'md'}
			class:btn-lg={size === 'lg'}
			class:btn-xl={size === 'xl'}
			class:btn-wide={wide}
			class:btn-block={block}
			class:btn-primary={type === 'primary'}
			class:btn-secondary={type === 'secondary'}
			class:btn-accent={type === 'accent'}
			class:btn-success={type === 'success'}
			class:btn-info={type === 'info'}
			class:btn-warning={type === 'warning'}
			class:btn-error={type === 'error'}
			class:btn-link={type === 'link'}
			class:btn-ghost={type === 'ghost'}
			class:btn-neubrutal={type === 'neubrutal'}
			class:btn-circle={shape === 'circle'}
			class:btn-square={shape === 'square'}
			class:btn-active={active}
			class:btn-disabled={disabled}
			class:loading
			class:no-animation={noAnimation}
			{...$$restProps}
			use:Ripple={{}}
		>
			<slot />
		</a>
	{:else}
		<a
			{href}
			{target}
			class="btn {type === 'neubrutal'
				? 'shadow-primary-content text-primary-content border-primary-content border-2'
				: ''} {className}"
			class:btn-xs={size === 'xs'}
			class:btn-sm={size === 'sm'}
			class:btn-md={size === 'md'}
			class:btn-lg={size === 'lg'}
			class:btn-xl={size === 'xl'}
			class:btn-wide={wide}
			class:btn-block={block}
			class:btn-primary={type === 'primary'}
			class:btn-secondary={type === 'secondary'}
			class:btn-accent={type === 'accent'}
			class:btn-success={type === 'success'}
			class:btn-info={type === 'info'}
			class:btn-warning={type === 'warning'}
			class:btn-error={type === 'error'}
			class:btn-link={type === 'link'}
			class:btn-ghost={type === 'ghost'}
			class:btn-neubrutal={type === 'neubrutal'}
			class:btn-circle={shape === 'circle'}
			class:btn-square={shape === 'square'}
			class:btn-active={active}
			class:btn-disabled={disabled}
			class:loading
			class:no-animation={noAnimation}
			on:blur
			on:focus
			on:mousedown
			on:mouseenter
			on:mouseleave
			on:mousemove
			on:mouseout
			on:mouseover
			on:mouseup
			{...$$restProps}
			use:Ripple={{}}
		>
			<slot />
		</a>
	{/if}
{:else}
	<button
		class="btn {type === 'neubrutal'
			? 'shadow-primary-content text-primary-content border-primary-content border-2'
			: ''} {className}"
		class:btn-xs={size === 'xs'}
		class:btn-sm={size === 'sm'}
		class:btn-md={size === 'md'}
		class:btn-lg={size === 'lg'}
		class:btn-xl={size === 'xl'}
		class:btn-wide={wide}
		class:btn-block={block}
		class:btn-primary={type === 'primary'}
		class:btn-secondary={type === 'secondary'}
		class:btn-accent={type === 'accent'}
		class:btn-success={type === 'success'}
		class:btn-info={type === 'info'}
		class:btn-warning={type === 'warning'}
		class:btn-error={type === 'error'}
		class:btn-link={type === 'link'}
		class:btn-ghost={type === 'ghost'}
		class:btn-neubrutal={type === 'neubrutal'}
		class:btn-circle={shape === 'circle'}
		class:btn-square={shape === 'square'}
		class:btn-active={active}
		class:btn-disabled={disabled}
		class:loading
		class:no-animation={noAnimation}
		on:click
		on:blur
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mousedown
		on:mouseenter
		on:mouseleave
		on:mousemove
		on:mouseout
		on:mouseover
		on:mouseup
		on:submit
		{...$$restProps}
		use:Ripple={{}}
	>
		<slot />
	</button>
{/if}

<!-- <svelte:element
	this={tag}
	href={tag === 'a' ? href : null}
	class={_class}
	use:Ripple={{ centered: false }}><slot /></svelte:element
> -->
<style>
	.btn-neubrutal {
		box-shadow: 4px 4px var(--tw-shadow-color, #000000);
	}
</style>
