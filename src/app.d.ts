/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
	// interface HTMLProps {
	// 	importance?: 'auto' | 'high' | 'low' | undefined;
	// }
}

// export declare namespace global {
// 	declare namespace svelte.JSX {
// 		interface HTMLProps {
// 			importance?: 'auto' | 'high' | 'low' | undefined;
// 		}
// 	}
// }

type Direction = 'up' | 'down' | 'left' | 'right';

type ScrollDirection = {
	vertical?: Direction;
	horizontal?: Direction;
};

type ObserverEventDetails = {
	inView: boolean;
	entry: IntersectionObserverEntry;
	scrollDirection: ScrollDirection;
	node: HTMLElement;
	observer: IntersectionObserver;
};

type LifecycleEventDetails = {
	node: HTMLElement;
	observer: IntersectionObserver;
};

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onchange?: (event: CustomEvent<ObserverEventDetails>) => void;
		onenter?: (event: CustomEvent<ObserverEventDetails>) => void;
		onleave?: (event: CustomEvent<ObserverEventDetails>) => void;
		oninit?: (event: CustomEvent<LifecycleEventDetails>) => void;
	}
}
