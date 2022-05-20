<div class="responsive-grid relative mb-20 container">
	<slot />
</div>

<style>
	.responsive-grid {
		--gap: var(--space-l);
		--aspect-ratio: 1.5/1;

		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min, 20ch)), 1fr));
		place-content: center;
		place-items: stretch;
	}
</style>
