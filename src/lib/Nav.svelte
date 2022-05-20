<script lang="ts">
	import { MoreVerticalIcon } from 'svelte-feather-icons';
	import NavLinks from '$lib/NavLinks.svelte';
	import ThemeButton from './ThemeButton.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import Button from './Button.svelte';

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<nav class="row-span-1 row-start-1 navbar w-full bg-base-300 shadow-lg">
	<div class="md:navbar-start flex-1">
		<Button tag="a" href="/" prefetch type="ghost" size="xl" class="capitalize font-bold text-xl"
			>Todd Matheson</Button
		>
	</div>

	<div class="hidden md:flex flex-none md:flex-auto md:navbar-end">
		<ul class="menu menu-horizontal p-0 gap-2 dropdown dropdown-hover dropdown-end">
			<NavLinks />
			<li tabindex="0">
				<ThemeButton />
				<ThemeSwitch />
			</li>
		</ul>
	</div>

	<div class="flex-none navbar-end md:hidden">
		<label for="drawer-toggle" class="btn btn-square btn-ghost relative">
			<MoreVerticalIcon class="inline-block w-6 h-6 stroke-current fill-none" strokeWidth={2.5} />
		</label>
	</div>
</nav>
