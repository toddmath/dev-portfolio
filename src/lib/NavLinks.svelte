<script lang="ts">
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	export let links = [
		{ id: 1, href: '/', text: 'Home' },
		{ id: 2, href: '/about', text: 'About Me' },
		{ id: 3, href: '/projects', text: 'Projects' },
		{ id: 4, href: '/uses', text: 'Uses' }
	];
</script>

{#each links as link (link.id)}
	{@const isActive = $page.url.pathname === link.href}
	<li>
		<Button
			tag="a"
			href={link.href}
			prefetch
			type={isActive ? 'secondary' : 'ghost'}
			class={isActive ? 'text-secondary-content' : ''}>{link.text}</Button
		>
	</li>
{/each}
