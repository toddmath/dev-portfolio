<script lang="ts">
	import NavLinks from '$lib/NavLinks.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	export let side: 'left' | 'right' = 'right';
</script>

<div class="drawer" class:drawer-end={side === 'right'}>
	<input id="drawer-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content grid" style="grid-template-rows: auto 1fr auto;">
		<slot name="navbar" />
		<slot name="content" />
	</div>

	<div class="drawer-side">
		<label for="drawer-toggle" class="drawer-overlay" />
		<ul class="p-4 w-80 bg-base-100 menu dropdown dropdown-end dropdown-left">
			<NavLinks />
			<li tabindex="0">
				<ThemeSwitch inDrawer />
			</li>
		</ul>
	</div>
</div>
