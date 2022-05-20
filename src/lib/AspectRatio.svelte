<script lang="ts">
	type Ratio = '2x1' | '16x9' | '4x3' | '1x1' | '3x4' | '3x2' | '9x16' | '1x2';
	export let ratio: Ratio = '2x1';

	let bx_class = `bx--aspect-ratio--${ratio}`;
</script>

<div class={bx_class} {...$$restProps}>
	<div class:bx--aspect-ratio--object={true}>
		<slot />
	</div>
</div>
