import type { Action } from './types';

export type Event = 'change' | 'leave' | 'enter' | 'init';

export type Options = {
	root?: HTMLElement | null;
	rootMargin?: string;
	threshold?: number | number[];
	unobserveOnEnter?: boolean;
};

export type Position = { x?: number; y: number };

type Direction = 'up' | 'down' | 'left' | 'right';

export type ScrollDirection = {
	vertical?: Direction;
	horizontal?: Direction;
};

export type ObserverEventDetails = {
	inView: boolean;
	entry: IntersectionObserverEntry;
	scrollDirection: ScrollDirection;
	node: HTMLElement;
	observer: IntersectionObserver;
};

export type LifecycleEventDetails = {
	node: HTMLElement;
	observer: IntersectionObserver;
};

const defaultOptions: Options = {
	root: null,
	rootMargin: '0px',
	threshold: 0,
	unobserveOnEnter: false
};

const createEvent = <T = ObserverEventDetails>(name: Event, detail: T): CustomEvent<T> => {
	return new CustomEvent(name, { detail });
};

export const inview: Action<Options> = (node, options: Options = {}) => {
	const { root, rootMargin, threshold, unobserveOnEnter }: Options = {
		...defaultOptions,
		...options
	};

	let prevPos: Position = { x: undefined, y: undefined };
	const scrollDirection: ScrollDirection = { vertical: undefined, horizontal: undefined };

	if (typeof IntersectionObserver !== 'undefined' && node) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (prevPos.y > entry.boundingClientRect.y) {
						scrollDirection.vertical = 'up';
					} else {
						scrollDirection.vertical = 'down';
					}

					if (prevPos.x > entry.boundingClientRect.x) {
						scrollDirection.horizontal = 'left';
					} else {
						scrollDirection.horizontal = 'right';
					}

					prevPos = {
						x: entry.boundingClientRect.x,
						y: entry.boundingClientRect.y
					};

					const detail: ObserverEventDetails = {
						inView: entry.isIntersecting,
						entry,
						scrollDirection,
						node,
						observer
					};

					if (entry.isIntersecting) {
						node.dispatchEvent(createEvent('enter', detail));
						if (unobserveOnEnter) observer.unobserve(node);
					} else {
						node.dispatchEvent(createEvent('leave', detail));
					}
				});
			},
			{ root, rootMargin, threshold }
		);

		// NOTE: This dispatcher has to be wrapped in setTimeout, as it won't work otherwise.
		// Not sure why is it happening, maybe a callstack has to pass between the listeners?
		// Definitely something to investigate to understand better.
		setTimeout(() => {
			node.dispatchEvent(createEvent<LifecycleEventDetails>('init', { observer, node }));
		}, 0);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
};
