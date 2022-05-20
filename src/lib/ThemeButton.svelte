<script lang="ts">
	import { CircleIcon } from 'svelte-feather-icons';
	import Button from '$lib/Button.svelte';
	// import ThemeSwitch from '$lib/ThemeSwitch.svelte';

	export let inDrawer = false;
</script>

{#if inDrawer}
	<!-- <Button
		tag="a"
		type="ghost"
		shape="square"
		class="w-full h-full place-items-center align-middle text-center grid-cols-2 gap-1 flex flex-row flex-nowrap"
	> -->
	<span class="label-text">Theme</span>
	<span
		class="label-text-alt w-20 h-[18px] grid grid-cols-5 grid-rows-1 gap-0 place-items-center px-auto relative"
	>
		<CircleIcon
			class="stroke-base-content col-start-1 col-span-1 w-auto h-auto text-primary fill-current absolute inset-0 translate-x-[1px] z-40"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-2 col-span-1 w-auto h-auto text-secondary fill-current absolute inset-0 z-30"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-3 col-span-1 w-auto h-auto text-success fill-current absolute inset-0 -translate-x-[2px] z-20"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-4 col-span-1 w-auto h-auto text-accent fill-current absolute inset-0 -translate-x-[4px] z-10"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-5 col-span-1 w-auto h-auto text-info fill-current absolute inset-0 -translate-x-[6px] z-0"
			size="1.5x"
		/>
	</span>
	<!-- </span> -->
	<!-- </Button> -->
{:else}
	<Button
		tag="a"
		type="ghost"
		shape="circle"
		class="relative grid w-24 grid-cols-5 grid-rows-1 gap-0 place-items-center"
	>
		<CircleIcon
			class="stroke-base-content col-start-1 col-span-1 w-auto h-auto text-primary fill-current absolute bottom-0 left-0 right-0 -translate-y-1/2 translate-x-[1px] z-40"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-2 col-span-1 w-auto h-auto text-secondary fill-current absolute bottom-0 left-0 right-0 -translate-y-1/2 z-30"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-3 col-span-1 w-auto h-auto text-success fill-current absolute bottom-0 left-0 right-0 -translate-y-1/2 -translate-x-[2px] z-20"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-4 col-span-1 w-auto h-auto text-accent fill-current absolute bottom-0 left-0 right-0 -translate-y-1/2 -translate-x-[4px] z-10"
			size="1.5x"
		/>
		<CircleIcon
			class="stroke-base-content col-start-5 col-span-1 w-auto h-auto text-info fill-current absolute bottom-0 left-0 right-0 -translate-y-1/2 -translate-x-[6px] z-0"
			size="1.5x"
		/>
	</Button>
{/if}
