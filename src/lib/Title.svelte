<script lang="ts">
	export let tag: `h${1 | 2 | 3}` = 'h1';
</script>

<svelte:element this={tag} class="title font-semibold leading-none text-inherit w-full capitalize">
	<slot />
</svelte:element>

<style>
	.title {
		font-size: var(--step-5);
	}
</style>
