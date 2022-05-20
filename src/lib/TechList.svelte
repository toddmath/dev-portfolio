<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	export let tech: string[] = [];
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
	export let outline = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | null = null;
	export let delay = 0;
</script>

<div class="flex-grow-0 justify-end flex flex-col gap-y-3 mb-3">
	<h3 class="text-center font-bold capitalize opacity-60">Technology:</h3>

	<ul class="flex-grow rounded-box flex flex-wrap items-center justify-center gap-y-2 gap-x-4">
		{#each tech as t, i}
			<li
				in:fade={{ duration: 300, delay: delay + i * 150, easing: cubicIn }}
				class="badge list-none text-md tracking-tight font-medium"
				class:badge-outline={outline}
				class:badge-xs={size === 'xs'}
				class:badge-sm={size === 'sm'}
				class:badge-md={size === 'md'}
				class:badge-lg={size === 'lg'}
				class:badge-primary={type === 'primary'}
				class:badge-secondary={type === 'secondary'}
				class:badge-accent={type === 'accent'}
				class:badge-ghost={type === 'ghost'}
				class:badge-info={type === 'info'}
				class:badge-success={type === 'success'}
				class:badge-warning={type === 'warning'}
				class:badge-error={type === 'error'}
			>
				{t}
			</li>
		{/each}
	</ul>
</div>
