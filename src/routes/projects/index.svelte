<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Grid from '$lib/Grid.svelte';
	import Card from '$lib/Card.svelte';
</script>

<svelte:head>
	<title>Projects - Todd Matheson</title>
</svelte:head>

<Section title="Projects">
	<!-- <div class="projects mx-auto w-full lg:max-w-7xl px-4 md:px-4 mt-12">
		<h1
			in:fade={{ duration: 500, easing: cubicIn }}
			out:fade={{ duration: 200, easing: cubicOut }}
			class="font-semibold self-end"
		>
			Projects
		</h1> -->
	<Grid --min="33ch">
		<Card
			imgSrc="crown-clothing.jpeg"
			imgDir="top"
			title="Crown Clothing"
			ext="https://www.crown-clothes.com"
			github="https://github.com/toddmath/crwn-clothing"
			date="2019-09-03"
			tech={['React', 'Redux', 'Redux Saga', 'Styled Components', 'Jest', 'Firebase', 'Netlify']}
			index={1}
		>
			<p slot="description" class="text-md">
				E-commerce demo web app. Built as part of an awesome course, <a
					class="link link-primary"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
					>Complete React Developer</a
				>, on
				<a
					class="link link-primary"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.udemy.com">udemy.com</a
				>.
			</p>
		</Card>

		<Card
			title="Memory"
			date="2020-07-05"
			github="https://github.com/toddmath/Memory-Emoji"
			ext="https://memory-emoji.netlify.app"
			imgSrc="emoji-memory.jpeg?format=avif;webp;jpeg&quality=75&width=200;400;600;800&height=150;300;400;600"
			tech={['React', 'Redux', 'Typescript', 'Framer Motion', 'Styled Components']}
			index={2}
		>
			<p slot="description" class="text-md">
				Memory game with emojis! The rules are simple, memorizing the emojis isn't. Flip the
				matching cards until there's none left.
			</p>
		</Card>

		<Card
			title="Natour Outdoors"
			date="2020-04-01"
			github="https://github.com/toddmath/Natours"
			ext="https://natouroutdoors.netlify.app"
			imgSrc="natour.jpeg"
			tech={['Sass', 'HTML5', 'Netlify']}
			index={3}
		>
			<p slot="description" class="text-md">
				Demo web site for a nature & outdoors adventure service. Part of the awesome <a
					href="https://www.udemy.com">udemy</a
				>
				course
				<a
					class="link link-primary"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.udemy.com/course/advanced-css-and-sass/">Advanced CSS and Sass</a
				>
			</p>
		</Card>

		<Card
			title="SpaceX Launches"
			date="2019-05-01"
			ext="https://desolate-beyond-67463.herokuapp.com/"
			imgSrc="spacex.jpeg"
			tech={['React', 'GraphQL', 'Apollo', 'Heroku', 'Bootstrap']}
			index={4}
		>
			<p slot="description" class="text-md">
				Web app that uses GraphQL to communicate with the comprehensive spaceX API. Displays a list
				of launches and launch details. Deployed using Heroku.
			</p>
		</Card>

		<Card
			title="Tetris"
			date="2020-08-02"
			ext="https://tetris-ts.netlify.app"
			github="https://github.com/toddmath/tetris"
			imgSrc="tetris.jpeg"
			tech={['React', 'Typescript', 'State Designer', 'Framer Motion', 'Chakra UI']}
			index={5}
		>
			<p slot="description" class="text-md">
				Classic game of Tetris. State managed and built using a <a
					href="https://state-designer.com"
					target="_blank"
					rel="noopener noreferrer"
					class="link link-primary">state machine</a
				>, ui with
				<a
					href="https://chakra-ui.com"
					target="_blank"
					rel="noopener noreferrer"
					class="link link-primary">chakra-ui</a
				>.
			</p>
		</Card>
	</Grid>
	<!-- </div> -->
</Section>

<!-- <style>
	.projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min(25vh, 8rem) 1fr;
		place-items: center;
		row-gap: 3rem;
		perspective: 100rem;
		perspective-origin: 50% 50%;
		transform-style: preserve-3d;
		margin-bottom: 8rem;
	}

	h1 {
		font-size: var(--step-5);
	}
</style> -->
