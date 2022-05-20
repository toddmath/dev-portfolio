import type { Action } from './types';

export type StickyProps = Partial<{
	area?: 'top' | 'bottom' | 'left' | 'right' | undefined;
}>;

export const sticky: Action<StickyProps> = (node, options) => {
	// if (options.area == null) options.area = 'top';
	options.area = options.area ?? 'top';
	// const sentinelStyle = 'position: absolute; height: 1px;';

	const isValidYPosition = ({ target, boundingClientRect }: IntersectionObserverEntry): boolean => {
		return target === stickySentinelTop ? boundingClientRect.y < 0 : boundingClientRect.y > 0;
	};

	const intersectionCallback: IntersectionObserverCallback = ([entry]) => {
		const isStuck = !entry.isIntersecting && isValidYPosition(entry);
		node.dispatchEvent(new CustomEvent('stuck', { detail: { isStuck } }));
	};

	const mutationCallback: MutationCallback = (mutations) => {
		mutations.forEach(() => {
			const { parentNode: topParent } = stickySentinelTop;
			const { parentNode: bottomParent } = stickySentinelBottom;

			if (stickySentinelTop !== topParent.firstChild) {
				topParent.prepend(stickySentinelTop);
			}
			if (stickySentinelBottom !== bottomParent.lastChild) {
				bottomParent.append(stickySentinelBottom);
			}
		});
	};

	const intersectionObserver = new IntersectionObserver(intersectionCallback, {});
	const mutationObserver = new MutationObserver(mutationCallback);

	const stickySentinelTop = document.createElement('div');
	stickySentinelTop.classList.add('stickySentinelTop');
	stickySentinelTop.style.position = 'absolute';
	stickySentinelTop.style.height = '1px';
	// stickySentinelTop.style = sentinelStyle;
	node.parentNode.prepend(stickySentinelTop);

	const stickySentinelBottom = document.createElement('div');
	stickySentinelBottom.classList.add('stickySentinelBottom');
	// stickySentinelBottom.style = sentinelStyle;
	stickySentinelBottom.style.position = 'absolute';
	stickySentinelBottom.style.height = '1px';
	node.parentNode.append(stickySentinelBottom);

	// if (options.area === 'top') observer.observe(stickySentinelTop);
	// else if (options.area === 'bottom') observer.observe(stickySentinelBottom);

	switch (options.area) {
		case 'top': {
			intersectionObserver.observe(stickySentinelTop);
			break;
		}
		case 'bottom': {
			intersectionObserver.observe(stickySentinelBottom);
			break;
		}
	}

	mutationObserver.observe(node.parentNode, { childList: true });

	return {
		update(newOptions) {
			switch (newOptions.area) {
				case 'top': {
					intersectionObserver.unobserve(stickySentinelBottom);
					intersectionObserver.observe(stickySentinelTop);
					break;
				}
				case 'bottom': {
					intersectionObserver.unobserve(stickySentinelTop);
					intersectionObserver.observe(stickySentinelBottom);
					break;
				}
				case undefined: {
					intersectionObserver.unobserve(stickySentinelTop);
					intersectionObserver.unobserve(stickySentinelBottom);
					// intersectionObserver.disconnect();
					// mutationObserver.disconnect();
				}
			}
			// if (newOptions.area === 'top') {
			// 	intersectionObserver.unobserve(stickySentinelBottom);
			// 	intersectionObserver.observe(stickySentinelTop);
			// } else if (newOptions.area === 'bottom') {
			// 	intersectionObserver.unobserve(stickySentinelTop);
			// 	intersectionObserver.observe(stickySentinelBottom);
			// }
		},

		destroy() {
			intersectionObserver.disconnect();
			mutationObserver.disconnect();
		}
	};
};
