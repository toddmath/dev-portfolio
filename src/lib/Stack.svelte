<script lang="ts">
	export let depth = 3;
	let className = '';
	export { className as class };
</script>

<div class="stack">
	<div class="border-2 border-base-content rounded-box card {className}">
		<slot name="card-body">
			<div class="card-body" />
		</slot>
		<!-- <div class="card-body">
		</div> -->
	</div>

	{#each Array(depth - 1) as _, i}
		<div class="border-2 border-base-content rounded-box card {className}">
			<slot name="stack-body">
				<div class="card-body w-full h-full">
					{i}
				</div>
			</slot>
		</div>
	{/each}
</div>
