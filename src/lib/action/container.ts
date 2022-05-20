import type { Action } from './types';

export type ContainerOptions = Record<string, number>;

const defaultSizes: ContainerOptions = {
	small: 0,
	medium: 200,
	large: 400
};

export const container: Action<ContainerOptions> = (node, sizes = defaultSizes) => {
	const ro = new ResizeObserver(() => {
		const { width } = node.getBoundingClientRect();
		let activeClass = '';

		for (const property in sizes) {
			if (width > sizes[property]) {
				activeClass = property;
			}
			node.classList.remove(property);
		}

		if (activeClass) node.classList.add(activeClass);
	});

	ro.observe(node);

	return {
		destroy() {
			ro.disconnect();
		}
	};
};

// export type ContainerOptions = {
// 	sizes: Record<string, number>;
// 	on?: Record<string, string>;
// };

// const defaultSizes: ContainerOptions = {
// 	sizes: {
// 		small: 0,
// 		medium: 200,
// 		large: 400
// 	}
// };

// export const container: Action<ContainerOptions> = (node, options = defaultSizes) => {
// 	const { sizes, on } = options;
// 	const ro = new ResizeObserver(() => {
// 		const { width } = node.getBoundingClientRect();
// 		let activeClass = '';
// 		for (const property in sizes) {
// 			if (width > sizes[property]) {
// 				activeClass = property;
// 			}
// 			node.classList.remove(property);
// 		}
// 		if (activeClass) {
// 			node.classList.add(activeClass);
// 			if (on && activeClass in on) {
// 				for (const cls of on[activeClass].split(' ')) {
// 					if (cls !== '') node.classList.add(cls);
// 				}
// 				for (const prop in on) {
// 					if (prop !== activeClass) {
// 						for (const cls of on[prop].split(' ')) {
// 							if (cls !== '') node.classList.remove(cls);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	});

// 	ro.observe(node);

// 	return {
// 		destroy() {
// 			ro.disconnect();
// 		}
// 	};
// };
