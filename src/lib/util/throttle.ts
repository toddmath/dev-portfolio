export interface ThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
}

export type Methods = {
	cancel: () => void;
	flush: () => void;
};

export type ThrottleFn<A, R> = (...args: A[]) => R;

// type ThrottleReturn<A, R> = {
// 	(...args: A[]): R;
// 	cancel: () => void;
// 	flush: () => void;
// };

export function throttle<A, R>(
	fn: ThrottleFn<A, R>,
	interval: number,
	options: ThrottleOptions = {}
): ThrottleFn<A, R> & Methods {
	let timeoutId: NodeJS.Timeout = null;
	let throttleFn: ThrottleFn<A, R> | null = null;
	const leading = options.leading || true;
	let trailing = options.trailing || !leading;
	if (leading) trailing = false;

	const cancel = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	};

	const flush = () => {
		const call = throttleFn;
		cancel();
		if (call) call();
	};

	function throttleWrapper(...args: A[]) {
		let callNow = leading && !timeoutId;
		throttleFn = () => fn(...args);

		if (!timeoutId) {
			timeoutId = setTimeout(() => {
				timeoutId = null;
				if (trailing) return throttleFn();
			}, interval);
		}

		if (callNow) {
			callNow = false;
			return throttleFn();
		}
	}

	throttleWrapper.cancel = cancel;
	throttleWrapper.flush = flush;

	return throttleWrapper;
}

// export interface ThrottleWrapper {
//   (): void;
//   cancel: () => void;
//   flush: () => void;
// }

// export function throttle(fn, interval, options) {

//   const cancel = function () {

//   }

//   const flush = function () {

//   }

//   const throttleWrapper: ThrottleWrapper = function () {

//   }

//   throttleWrapper.cancel = cancel;
//   throttleWrapper.flush = flush;

//   return throttleWrapper;
// }
