<script lang="ts">
	import {
		GithubIcon,
		TwitterIcon,
		LinkedinIcon,
		InstagramIcon,
		CodepenIcon,
		CodesandboxIcon
	} from 'svelte-feather-icons';
	import Button from '$lib/Button.svelte';
</script>

<footer
	class="row-span-1 row-start-3 px-4 py-10 md:p-10 footer bg-neutral text-neutral-content footer-center"
>
	<div class="grid grid-flow-col btn-group glass rounded-box overflow-hidden gap-0 sm:gap-2">
		<Button type="ghost" tag="a" href="https://github.com/toddmath" target="_blank"
			><GithubIcon class="stroke-current" /></Button
		>
		<Button
			type="ghost"
			tag="a"
			href="https://twitter.com/tM0Nk3y"
			target="_blank"
			rel="noopener noreferrer"><TwitterIcon class="stroke-current" /></Button
		>
		<Button
			type="ghost"
			tag="a"
			href="https://www.linkedin.com/in/todd-matheson-bb5b90178/"
			target="_blank"
			rel="noopener noreferrer"><LinkedinIcon class="stroke-current" /></Button
		>
		<Button
			type="ghost"
			tag="a"
			href="https://www.instagram.com/todmath11/"
			target="_blank"
			rel="noopener noreferrer"><InstagramIcon class="stroke-current" /></Button
		>
		<Button
			type="ghost"
			tag="a"
			href="https://codepen.io/toddmath"
			target="_blank"
			rel="noopener noreferrer"><CodepenIcon class="stroke-current" /></Button
		>
		<Button
			type="ghost"
			tag="a"
			href="https://codesandbox.io/u/toddmath"
			target="_blank"
			rel="noopener noreferrer"><CodesandboxIcon class="stroke-current" /></Button
		>
	</div>

	<div class="place-items-center">
		<p class="text-base leading-none flex items-center justify-center flex-wrap">
			Designed and Created by Todd Matheson.<Button
				tag="a"
				href="https://github.com/toddmath"
				target="_blank"
				type="link"
				className="stroke-current hover:fill-current"
				>Give it a&nbsp;<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18px"
					height="18px"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-star fill-transparent"
					><title>star</title><polygon
						points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
					/></svg
				>&nbsp;on Github</Button
			>
		</p>
	</div>
</footer>
