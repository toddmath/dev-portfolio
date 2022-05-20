<script lang="ts">
	// import { browser } from '$app/env';
	// import { onMount, createEventDispatcher } from 'svelte';
	// import { fade } from 'svelte/transition';
	// import AspectRatio from './AspectRatio.svelte';

	// NOTE: Approach 1:
	/** Specify the image alt text */
	// export let alt: string;
	/**
	 * Specify the aspect ratio for the image wrapper
	 * @type {"2x1" | "16x9" | "4x3" | "1x1" | "3x4" | "3x2" | "9x16" | "1x2"}
	 */
	// export let ratio: '2x1' | '16x9' | '4x3' | '1x1' | '3x4' | '3x2' | '9x16' | '1x2' | undefined =
	undefined;
	/** Set to `true` when the image is loaded */
	// export let loaded: boolean = false;
	/** Set to `true` when there is an error loading the image */
	// export let error: boolean = false;
	/** Set to `true` when `loaded` is true and `error` is false. */
	// export let imageLoading: boolean = false;
	/** Set to `true` to fade in the image on load */
	// export let fadeIn: boolean = false;
	//
	// const dispatch = createEventDispatcher();
	// const fast02 = 110;
	// let image = null;
	//
	// function loadImage(url?: string): void {
	// 	if (image != null) image = null;
	// 	loaded = false;
	// 	error = false;
	// 	image = new Image();
	// 	image.src = url || src;
	// 	image.onload = () => (loaded = true);
	// 	image.onerror = () => (error = true);
	// }
	//
	// $: imageLoading = !loaded && !error;
	// $: if (src && browser) loadImage();
	// $: if (loaded) dispatch('load');
	// $: if (error) dispatch('error');
	//
	// onMount(() => {
	// 	return () => (image = null);
	// });

	// NOTE: Approach 2:
  export let alt: string;
	export let height: number;
	export let src: string;
	export let sources: { srcset: string, type: string }[] = [];
	export let placeholder: string;
	export let width: number;
	export let maxWidth: string = '1280px';
	export let sizes: string = `(max-width: ${maxWidth}) 100vw, ${maxWidth}}`;
	export let importance: 'auto' | 'high' | 'low' | undefined = undefined;
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let style: string = '';
	let props = { loading, width, height, src: src ?? placeholder, style: `max-width: ${maxWidth};${style}`, importance }

	// NOTE: Approach 3:
 //  type ImgData = Array<{ format: string, width: number, height?: number, src: string }>;
 //  type ImgSource = { type: string, srcset: string[] };
	//
	// export let data: ImgData = [];
	// export let alt: string;
	//
	// let sources: Record<string, ImgSource>;
	//
	// $: {
	// 	sources = {};
	//
	// 	data.forEach((img) => {
	// 		if (!sources[img.format]) {
	// 			sources[img.format] = {
	// 				type: `image/${img.format}`,
	// 				srcset: []
	// 			};
	// 		}
	//
	// 		sources[img.format].srcset.push(`${img.src} ${img.width}w`);
	// 	});
	// }
	//
	// $: fallback = data
	// 	.filter(
	// 		(img) =>
	// 			img.format === 'png' ||
	// 			img.format === 'jpg' ||
	// 			img.format === 'jpeg' ||
	// 			img.format === 'webp'
	// 	)
	// 	.sort((a, b) => a.width - b.width)
	// 	.pop();
</script>

<!-- <picture> -->
<!-- 	{#each Object.values(sources) as source} -->
<!-- 		<source type={source.type} srcset={source.srcset.join(', ')} /> -->
<!-- 	{/each} -->
<!-- 	<img src={fallback.src} width={fallback.width} height={fallback.height} {alt} class="block w-full h-auto max-h-full object-cover" /> -->
<!-- </picture> -->

<!-- NOTE: Approach 2: -->
<picture>
  {#each sources as source}
    <source data-sizes={sizes} data-srcset={source.srcset} type={source.type} {width} {height} />
  {/each}
  {#if src === ''}
    <img
      class="lazy hidden"
      {alt}
      {...props}
      data-src={src}
			decoding="async"
			loading="lazy"
    />
  {:else}
     <img class="lazy h-auto max-w-full bg-cover object-cover" {alt} {...props} data-src={src} decoding="async" loading="lazy" />
  {/if}
</picture>

<!-- NOTE: Approach 1: -->
<!-- {#if ratio === undefined} -->
<!-- 	{#if imageLoading} -->
<!-- 		<slot name="loading" /> -->
<!-- 	{/if} -->
<!-- 	{#if loaded} -->
<!-- 		<img -->
<!-- 			{...$$restProps} -->
<!-- 			class="w-full rounded-lg" -->
<!-- 			style={$$restProps.style} -->
<!-- 			{src} -->
<!-- 			{alt} -->
<!-- 			transition:fade={{ duration: fadeIn ? fast02 : 0 }} -->
<!-- 		/> -->
<!-- 	{/if} -->
<!-- 	{#if error} -->
<!-- 		<slot name="error" /> -->
<!-- 	{/if} -->
<!-- {:else} -->
<!-- 	<AspectRatio {ratio}> -->
<!-- 		{#if imageLoading} -->
<!-- 			<slot name="loading" /> -->
<!-- 		{/if} -->
<!-- 		{#if loaded} -->
<!-- 			<img -->
<!-- 				{...$$restProps} -->
<!-- 				class="w-full rounded-lg" -->
<!-- 				style={$$restProps.style} -->
<!-- 				{src} -->
<!-- 				{alt} -->
<!-- 				transition:fade={{ duration: fadeIn ? fast02 : 0 }} -->
<!-- 			/> -->
<!-- 		{/if} -->
<!-- 		{#if error} -->
<!-- 			<slot name="error" /> -->
<!-- 		{/if} -->
<!-- 	</AspectRatio> -->
	<!-- {/if} -->

<style>
	img {
		content-visibility: auto;
	}
</style>
