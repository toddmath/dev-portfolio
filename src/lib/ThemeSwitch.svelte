<script lang="ts">
	import Ripple from '$lib/action/ripple';
	import ThemeButton from '$lib/ThemeButton.svelte';

	type Theme =
		| 'acid'
		| 'aqua'
		| 'autumn'
		| 'black'
		| 'bumblebee'
		| 'business'
		| 'cmyk'
		| 'coffee'
		| 'corporate'
		| 'cupcake'
		| 'cyberpunk'
		| 'dark'
		| 'dracula'
		| 'emerald'
		| 'fantasy'
		| 'forest'
		| 'garden'
		| 'halloween'
		| 'lemonade'
		| 'light'
		| 'lofi'
		| 'luxury'
		| 'night'
		| 'pastel'
		| 'retro'
		| 'synthwave'
		| 'valentine'
		| 'winter'
		| 'wireframe';

	export let themes: Theme[] = [
		'acid',
		'aqua',
		'autumn',
		'black',
		'bumblebee',
		'business',
		'cmyk',
		'coffee',
		'corporate',
		'cupcake',
		'dark',
		'dracula',
		'emerald',
		'fantasy',
		'forest',
		'garden',
		'halloween',
		'lemonade',
		'light',
		'lofi',
		'night',
		'pastel',
		'synthwave',
		'winter'
		// 'wireframe'
	];
	export let inDrawer = false;

	themes = Array.from(themes).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
</script>

{#if inDrawer}
	<!-- <div class="mb-8"> -->
	<div class="form-control w-full max-w-xs">
		<label class="label gap-2 text-lg" for="theme-choose-select">
			<!-- <span class="label-text">Theme</span> -->
			<ThemeButton inDrawer />
		</label>
		<select id="theme-choose-select" data-choose-theme class="select select-bordered w-full">
			<option disabled selected value>Theme</option>
			{#each themes as theme}
				<option value={theme}>{theme}</option>
			{/each}
		</select>
	</div>
	<!-- </div> -->
{:else}
	<ul
		tabindex="0"
		class="bg-base-200 menu menu-compact lg:menu-normal dropdown-content text-base-content overflow-y-auto rounded-box"
	>
		<li class="menu-title"><span>Theme</span></li>
		{#each themes as theme}
			<!-- svelte-ignore a11y-missing-attribute -->
			<li data-set-theme={theme} class="hover-bordered text-sm">
				<a use:Ripple={{ class: 'text-primary bg-primary' }}>{theme}</a>
			</li>
		{/each}
	</ul>
{/if}
