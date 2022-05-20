<script lang="ts">
	export let open: boolean = false;

	type HamburgerType =
		| 'three-d-x'
		| 'three-d-x-r'
		| 'three-d-y'
		| 'three-d-y-r'
		| 'three-d-xy'
		| 'three-d-xy-r'
		| 'arrow'
		| 'arrow-r'
		| 'arrowalt'
		| 'arrowalt-r'
		| 'arrowturn'
		| 'arrowturn-r'
		| 'boring'
		| 'collapse'
		| 'collapse-r'
		| 'elastic'
		| 'elastic-r'
		| 'emphatic'
		| 'emphatic-r'
		| 'minus'
		| 'slider'
		| 'slider-r'
		| 'spin'
		| 'spin-r'
		| 'spring'
		| 'spring-r'
		| 'stand'
		| 'stand-r'
		| 'squeeze'
		| 'vortex'
		| 'vortex-r';

	export let type: HamburgerType = 'spin';

	let className = '';
	export { className as class };
</script>

<button
	class="hamburger {type} {className}"
	aria-label="Hamburger menu"
	class:is-active={open}
	on:click
	on:click={() => (open = !open)}
>
	<span class="hamburger-box">
		<span class="hamburger-inner" />
	</span>
</button>

<style>
	.hamburger {
		padding: var(--padding, 1rem);
		display: inline-block;
		cursor: pointer;

		transition-property: opacity, filter;
		transition-duration: 0.15s;
		transition-timing-function: linear;

		/* Normalize (<button/>) */
		/* font: inherit; */
		/* color: inherit; */
		/* text-transform: none; */
		background-color: transparent;
		border: 0;
		margin: 0;
		overflow: visible;
	}

	.hamburger:active {
		background-color: transparent;
	}

	.hamburger:hover {
		opacity: var(--opacity, 0.7);
	}

	.hamburger.is-active:hover {
		opacity: var(--hover-opacity-active, var(--hover-opacity), 0.7);
	}

	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner::before,
	.hamburger.is-active .hamburger-inner::after {
		background-color: var(--active-color, var(--color, black));
	}

	.hamburger-box {
		width: var(--layer-width, 30px);
		height: calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);
		display: inline-block;
		position: relative;
	}

	.hamburger-inner {
		display: block;
		top: 50%;
		margin-top: var(--layer-height, 4px) / -2;
	}

	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		width: var(--layer-width, 30px);
		height: var(--layer-height, 4px);
		background-color: var(--color, black);
		border-radius: var(--border-radius, 4px);
		position: absolute;
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	.hamburger-inner::before,
	.hamburger-inner::after {
		content: '';
		display: block;
	}

	.hamburger-inner::before {
		top: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
	}

	.hamburger-inner::after {
		bottom: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
	}

	/* Three-D (X, XR, Y, YR, XY, XYR) */
	.three-d-x-r .hamburger-box,
	.three-d-x .hamburger-box,
	.three-d-y .hamburger-box,
	.three-d-y-r .hamburger-box,
	.three-d-xy .hamburger-box,
	.three-d-xy-r .hamburger-box {
		perspective: calc(var(--layer-width, 30px) * 2);
	}
	.three-d-x-r .hamburger-inner,
	.three-d-x .hamburger-inner,
	.three-d-y .hamburger-inner,
	.three-d-xy .hamburger-inner,
	.three-d-xy-r .hamburger-inner {
		transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
			background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.three-d-x-r .hamburger-inner::before,
	.three-d-x-r .hamburger-inner::after,
	.three-d-x .hamburger-inner::before,
	.three-d-x .hamburger-inner::after,
	.three-d-y .hamburger-inner::before,
	.three-d-y .hamburger-inner::after,
	.three-d-y-r .hamburger-inner::before,
	.three-d-y-r .hamburger-inner::after,
	.three-d-xy .hamburger-inner::before,
	.three-d-xy .hamburger-inner::after,
	.three-d-xy-r .hamburger-inner::before,
	.three-d-xy-r .hamburger-inner::after {
		transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.three-d-x-r.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateY(-180deg);
	}
	.three-d-x.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateY(180deg);
	}
	.three-d-y.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateX(-180deg);
	}
	.three-d-y-r.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateX(180deg);
	}
	.three-d-xy.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateX(180deg) rotateY(180deg);
	}
	.three-d-xy-r.is-active .hamburger-inner {
		background-color: transparent !important;
		transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
	}
	.three-d-x-r.is-active .hamburger-inner::before,
	.three-d-x.is-active .hamburger-inner::before,
	.three-d-y.is-active .hamburger-inner::before,
	.three-d-y-r.is-active .hamburger-inner::before,
	.three-d-xy.is-active .hamburger-inner::before,
	.three-d-xy-r.is-active .hamburger-inner::before {
		transform: translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0)
			rotate(45deg);
	}
	.three-d-x-r.is-active .hamburger-inner::after,
	.three-d-x.is-active .hamburger-inner::after,
	.three-d-y.is-active .hamburger-inner::after,
	.three-d-y.is-active .hamburger-inner::after,
	.three-d-xy.is-active .hamburger-inner::after,
	.three-d-xy-r.is-active .hamburger-inner::after {
		transform: translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0)
			rotate(-45deg);
	}

	/* Arrow, Arrow-R */
	.arrow.is-active .hamburger-inner::before {
		transform: translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(-45deg) scale(0.7, 1);
	}
	.arrow.is-active .hamburger-inner::after {
		transform: translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(45deg) scale(0.7, 1);
	}
	.arrow-r.is-active .hamburger-inner::before {
		transform: translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(45deg) scale(0.7, 1);
	}
	.arrow-r.is-active .hamburger-inner::after {
		transform: translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(-45deg) scale(0.7, 1);
	}

	/* ArrowAlt, ArrowAlt-R */
	.arrowalt .hamburger-inner::before,
	.arrowalt-r.hamburger-inner::before {
		transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.arrowalt .hamburger-inner::after,
	.arrowalt-r .hamburger-inner::after {
		transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.arrowalt.is-active .hamburger-inner::before {
		top: 0;
		transform: translate3d(
				calc(var(--layer-width, 30px) * -0.2),
				calc(var(--layer-width, 30px) * -0.25),
				0
			)
			rotate(-45deg) scale(0.7, 1);
		transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
	}
	.arrowalt.is-active .hamburger-inner::after {
		bottom: 0;
		transform: translate3d(
				calc(var(--layer-width, 30px) * -0.2),
				calc(var(--layer-width, 30px) * 0.25),
				0
			)
			rotate(45deg) scale(0.7, 1);
		transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
	}
	.arrowalt-r.is-active .hamburger-inner::before {
		top: 0;
		transform: translate3d(
				calc(var(--layer-width, 30px) * 0.2),
				calc(var(--layer-width, 30px) * -0.25),
				0
			)
			rotate(45deg) scale(0.7, 1);
		transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
	}
	.arrowalt-r.is-active .hamburger-inner::after {
		bottom: 0;
		transform: translate3d(
				calc(var(--layer-width, 30px) * 0.2),
				calc(var(--layer-width, 30px) * 0.25),
				0
			)
			rotate(-45deg) scale(0.7, 1);
		transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
	}

	/* Arrow Turn, Arrow Turn R */
	.arrowturn.is-active .hamburger-inner,
	.arrowturn-r.is-active .hamburger-inner {
		transform: rotate(-180deg);
	}
	.arrowturn.is-active .hamburger-inner::before {
		transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
	}
	.arrowturn.is-active .hamburger-inner::after {
		transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
	}
	.arrowturn-r.is-active .hamburger-inner::before {
		transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
	}
	.arrowturn-r.is-active .hamburger-inner::after {
		transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
	}

	/* Boring */
	.boring .hamburger-inner,
	.boring .hamburger-inner::before,
	.boring .hamburger-inner::after {
		transition-property: none;
	}
	.boring.is-active .hamburger-inner {
		transform: rotate(45deg);
	}
	.boring.is-active .hamburger-inner::before {
		top: 0;
		opacity: 0;
	}
	.boring.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(-90deg);
	}

	/* Collapse, Collapse R */
	.collapse .hamburger-inner,
	.collapse-r .hamburger-inner {
		top: auto;
		bottom: 0;
		transition-duration: 0.13s;
		transition-delay: 0.13s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.collapse .hamburger-inner::after,
	.collapse-r .hamburger-inner::after {
		top: calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);
		transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
	}
	.collapse .hamburger-inner::before,
	.collapse-r .hamburger-inner::before {
		transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.collapse.is-active .hamburger-inner {
		transform: translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0)
			rotate(-45deg);
		transition-delay: 0.22s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.collapse-r.is-active .hamburger-inner {
		transform: translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0)
			rotate(45deg);
		transition-delay: 0.22s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.collapse.is-active .hamburger-inner::after,
	.collapse-r.is-active .hamburger-inner::after {
		top: 0;
		opacity: 0;
		transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
	}
	.collapse.is-active .hamburger-inner::before {
		top: 0;
		transform: rotate(-90deg);
		transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.collapse-r.is-active .hamburger-inner::before {
		top: 0;
		transform: rotate(90deg);
		transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	/* Elastic, Elastic R */
	.elastic .hamburger-inner,
	.elastic-r .hamburger-inner {
		top: var(--layer-height, 4px) / 2;
		transition-duration: 0.275s;
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.elastic .hamburger-inner::before,
	.elastic-r .hamburger-inner::before {
		top: calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));
		transition: opacity 0.125s 0.275s ease;
	}
	.elastic .hamburger-inner::after,
	.elastic-r .hamburger-inner::after {
		top: calc((var(--layer-height, 4px) * 2) + (var(--layer-spacing, 6px) * 2));
		transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.elastic.is-active .hamburger-inner {
		--y-offset: calc(var(--layer-spacing, 6px) + var(--layer-height, 4px));
		transform: translate3d(0, var(--y-offset), 0) rotate(135deg);
		transition-delay: 0.075s;
	}
	.elastic-r.is-active .hamburger-inner {
		--y-offset: calc(var(--layer-spacing, 6px) + var(--layer-height, 4px));
		transform: translate3d(0, var(--y-offset), 0) rotate(-135deg);
		transition-delay: 0.075s;
	}
	.elastic.is-active .hamburger-inner::before,
	.elastic-r.is-active .hamburger-inner::before {
		transition-delay: 0s;
		opacity: 0;
	}
	.elastic.is-active .hamburger-inner::after {
		transform: translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-270deg);
		transition-delay: 0.075s;
	}
	.elastic-r.is-active .hamburger-inner::after {
		transform: translate3d(0, calc(var(--y-offset) * -2), 0) rotate(270deg);
		transition-delay: 0.075s;
	}

	/* Emphatic, Emphatic R */
	.emphatic,
	.emphatic-r {
		overflow: hidden;
	}
	.emphatic .hamburger-inner,
	.emphatic-r .hamburger-inner {
		transition: background-color 0.125s 0.175s ease-in;
	}
	.emphatic .hamburger-inner::before,
	.emphatic-r .hamburger-inner::before {
		left: 0;
		transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear,
			left 0.125s 0.175s ease-in;
	}
	.emphatic .hamburger-inner::after,
	.emphatic-r .hamburger-inner::after {
		top: calc((var(--layer-height, 4px)) + (var(--layer-spacing, 6px)));
		right: 0;
		transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear,
			right 0.125s 0.175s ease-in;
	}
	.emphatic.is-active .hamburger-inner,
	.emphatic-r.is-active .hamburger-inner {
		transition-delay: 0s;
		transition-timing-function: ease-out;
		background-color: transparent !important;
	}
	.emphatic.is-active .hamburger-inner::before {
		left: calc(var(--layer-width, 30px) * -2);
		top: calc(var(--layer-width, 30px) * -2);
		transform: translate3d(
				calc(var(--layer-width, 30px) * 2),
				calc(var(--layer-width, 30px) * 2),
				0
			)
			rotate(45deg);
		transition: left 0.125s ease-out, top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.emphatic-r.is-active .hamburger-inner::before {
		left: calc(var(--layer-width, 30px) * -2);
		top: calc(var(--layer-width, 30px) * 2);
		transform: translate3d(
				calc(var(--layer-width, 30px) * 2),
				calc(var(--layer-width, 30px) * -2),
				0
			)
			rotate(-45deg);
		transition: left 0.125s ease-out, top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.emphatic.is-active .hamburger-inner::after {
		right: calc(var(--layer-width, 30px) * -2);
		top: calc(var(--layer-width, 30px) * -2);
		transform: translate3d(
				calc(var(--layer-width, 30px) * -2),
				calc(var(--layer-width, 30px) * 2),
				0
			)
			rotate(-45deg);
		transition: right 0.125s ease-out, top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.emphatic-r.is-active .hamburger-inner::after {
		right: calc(var(--layer-width, 30px) * -2);
		top: calc(var(--layer-width, 30px) * 2);
		transform: translate3d(
				calc(var(--layer-width, 30px) * -2),
				calc(var(--layer-width, 30px) * -2),
				0
			)
			rotate(45deg);
		transition: right 0.125s ease-out, top 0.05s 0.125s linear,
			transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	/* Minus */
	.minus .hamburger-inner::before,
	.minus .hamburger-inner::after {
		transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
	}
	.minus.is-active .hamburger-inner::before,
	.minus.is-active .hamburger-inner::after {
		opacity: 0;
		transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
	}
	.minus.is-active .hamburger-inner::before {
		top: 0;
	}
	.minus.is-active .hamburger-inner::after {
		bottom: 0;
	}

	/* Slider, Slider R */
	.slider .hamburger-inner,
	.slider-r .hamburger-inner {
		top: calc(var(--layer-height, 4px) / 2);
	}
	.slider .hamburger-inner::before,
	.slider-r .hamburger-inner::before {
		top: calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));
		transition-property: transform, opacity;
		transition-timing-function: ease;
		transition-duration: 0.15s;
	}
	.slider .hamburger-inner::after,
	.slider-r .hamburger-inner::after {
		top: calc((var(--layer-height, 4px) * 2) + (var(--layer-spacing, 6px) * 2));
	}
	.slider.is-active .hamburger-inner {
		--y-offset: calc(var(--layer-spacing, 6px) + var(--layer-height, 4px));
		transform: translate3d(0, var(--y-offset), 0) rotate(45deg);
	}
	.slider-r.is-active .hamburger-inner {
		--y-offset: calc(var(--layer-spacing, 6px) + var(--layer-height, 4px));
		transform: translate3d(0, var(--y-offset), 0) rotate(-45deg);
	}
	.slider.is-active .hamburger-inner::before {
		transform: rotate(-45deg)
			translate3d(clac(var(--layer-width, 30px) / -7), calc(var(--layer-spacing, 6px) * -1), 0);
		opacity: 0;
	}
	.slider-r.is-active .hamburger-inner::before {
		transform: rotate(45deg)
			translate3d(calc(var(--layer-width, 30px) / 7), calc(var(--layer-spacing, 6px) * -1), 0);
		opacity: 0;
	}
	.slider.is-active .hamburger-inner::after {
		transform: translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-90deg);
	}
	.slider-r.is-active .hamburger-inner::after {
		transform: translate3d(0, calc(var(--y-offset) * -2), 0) rotate(90deg);
	}

	/* Spin, Spin R */
	.spin .hamburger-inner,
	.spin-r .hamburger-inner {
		transition-duration: 0.22s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spin .hamburger-inner::before,
	.spin-r .hamburger-inner::before {
		transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
	}
	.spin .hamburger-inner::after,
	.spin-r .hamburger-inner::after {
		transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spin.is-active .hamburger-inner {
		transform: rotate(225deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.spin-r.is-active .hamburger-inner {
		transform: rotate(-225deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.spin.is-active .hamburger-inner::before,
	.spin-r.is-active .hamburger-inner::before {
		top: 0;
		opacity: 0;
		transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
	}
	.spin.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(-90deg);
		transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.spin-r.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(90deg);
		transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	/* Spring */
	.spring .hamburger-inner {
		top: var(--layer-height, 4px) / 2;
		transition: background-color 0s 0.13s linear;
	}
	.spring .hamburger-inner::before {
		top: calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));
		transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spring .hamburger-inner::after {
		top: calc((var(--layer-height, 4px) * 2) + (var(--layer-spacing, 6px) * 2));
		transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spring.is-active .hamburger-inner {
		transition-delay: 0.22s;
		background-color: transparent !important;
	}
	.spring.is-active .hamburger-inner::before {
		top: 0;
		transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0)
			rotate(45deg);
	}
	.spring.is-active .hamburger-inner::after {
		top: 0;
		transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0)
			rotate(-45deg);
	}

	/* Spring R */
	.spring-r .hamburger-inner {
		top: auto;
		bottom: 0;
		transition-duration: 0.13s;
		transition-delay: 0s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spring-r .hamburger-inner::after {
		top: calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);
		transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;
	}
	.spring-r .hamburger-inner::before {
		transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.spring-r.is-active .hamburger-inner {
		transform: translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0)
			rotate(-45deg);
		transition-delay: 0.22s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.spring-r.is-active .hamburger-inner::after {
		top: 0;
		opacity: 0;
		transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;
	}
	.spring-r.is-active .hamburger-inner::before {
		top: 0;
		transform: rotate(90deg);
		transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	/* Stand, Stand R */
	.stand .hamburger-inner,
	.stand-r .hamburger-inner {
		transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
			background-color 0s 0.075s linear;
	}
	.stand .hamburger-inner::before,
	.stand-r .hamburger-inner::before {
		transition: top 0.075s 0.075s ease-in,
			transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.stand .hamburger-inner::after,
	.stand-r .hamburger-inner::after {
		transition: bottom 0.075s 0.075s ease-in,
			transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.stand.is-active .hamburger-inner {
		transform: rotate(90deg);
		background-color: transparent !important;
		transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
			background-color 0s 0.15s linear;
	}
	.stand-r.is-active .hamburger-inner {
		transform: rotate(-90deg);
		background-color: transparent !important;
		transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
			background-color 0s 0.15s linear;
	}
	.stand.is-active .hamburger-inner::before,
	.stand-r.is-active .hamburger-inner::before {
		top: 0;
		transform: rotate(-45deg);
		transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.stand.is-active .hamburger-inner::after,
	.stand-r.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(45deg);
		transition: bottom 0.075s 0.1s ease-out,
			transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	/* Squeeze */
	.squeeze .hamburger-inner {
		transition-duration: 0.075s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.squeeze .hamburger-inner::before {
		transition: top 0.075s 0.12s ease, opacity 0.075s ease;
	}
	.squeeze .hamburger-inner::after {
		transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.squeeze.is-active .hamburger-inner {
		transform: rotate(45deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.squeeze.is-active .hamburger-inner::before {
		top: 0;
		opacity: 0;
		transition: top 0.075s ease, opacity 0.075s 0.12s ease;
	}
	.squeeze.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(-90deg);
		transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	/* Vortex, Vortex R */
	.vortex .hamburger-inner,
	.vortex-r .hamburger-inner {
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
	}
	.vortex .hamburger-inner::before,
	.vortex .hamburger-inner::after,
	.vortex-r .hamburger-inner::before,
	.vortex-r .hamburger-inner::after {
		transition-duration: 0s;
		transition-delay: 0.1s;
		transition-timing-function: linear;
	}
	.vortex .hamburger-inner::before,
	.vortex-r .hamburger-inner::before {
		transition-property: top, opacity;
	}
	.vortex .hamburger-inner::after,
	.vortex-r .hamburger-inner::after {
		transition-property: bottom, transform;
	}
	.vortex.is-active .hamburger-inner {
		transform: rotate(765deg);
		transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
	}
	.vortex-r.is-active .hamburger-inner {
		transform: rotate(-765deg);
		transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
	}
	.vortex.is-active .hamburger-inner::before,
	.vortex.is-active .hamburger-inner::after,
	.vortex-r.is-active .hamburger-inner::before,
	.vortex-r.is-active .hamburger-inner::after {
		transition-delay: 0s;
	}
	.vortex.is-active .hamburger-inner::before,
	.vortex-r.is-active .hamburger-inner::before {
		top: 0;
		opacity: 0;
	}
	.vortex.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(90deg);
	}
	.vortex-r.is-active .hamburger-inner::after {
		bottom: 0;
		transform: rotate(-90deg);
	}
</style>
