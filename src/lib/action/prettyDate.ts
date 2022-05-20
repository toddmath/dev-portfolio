import type { Action } from './types';

// type DateLike = Date | number | string;

// in miliseconds
const units: Record<string, number> = {
	year: 24 * 60 * 60 * 1000 * 365,
	month: (24 * 60 * 60 * 1000 * 365) / 12,
	day: 24 * 60 * 60 * 1000,
	hour: 60 * 60 * 1000,
	minute: 60 * 1000,
	second: 1000
};

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const getRelativeTime = (d1: Date, d2 = new Date()) => {
	const elapsed = Number(d1) - Number(d2);

	// "Math.abs" accounts for both "past" & "future" scenarios
	for (const u in units) {
		if (Math.abs(elapsed) > units[u] || u == 'second') {
			return rtf.format(Math.round(elapsed / units[u]), u as Intl.RelativeTimeFormatUnit);
		}
	}
};

// function timeDifference(current: number, previous: number) {
// 	const msPerMinute = 60 * 1000;
// 	const msPerHour = msPerMinute * 60;
// 	const msPerDay = msPerHour * 24;
// 	const msPerMonth = msPerDay * 30;
// 	const msPerYear = msPerDay * 365;

// 	const elapsed = current - previous;

// 	if (elapsed < msPerMinute) {
// 		return Math.round(elapsed / 1000) + ' seconds ago';
// 	} else if (elapsed < msPerHour) {
// 		return Math.round(elapsed / msPerMinute) + ' minutes ago';
// 	} else if (elapsed < msPerDay) {
// 		return Math.round(elapsed / msPerHour) + ' hours ago';
// 	} else if (elapsed < msPerMonth) {
// 		return Math.round(elapsed / msPerDay) + ' days ago';
// 	} else if (elapsed < msPerYear) {
// 		return Math.round(elapsed / msPerMonth) + ' months ago';
// 	} else {
// 		return Math.round(elapsed / msPerYear) + ' years ago';
// 	}
// }

export interface PrettyDateProps extends HTMLTimeElement {
	timestamp?: string;
	format?: string;
	relative?: boolean;
	formatted?: string;
}

export type PrettyDateActionProps = Partial<
	Pick<PrettyDateProps, 'timestamp' | 'format' | 'relative'>
>;

export const prettyDate: Action<PrettyDateActionProps> = (node, options = {}) => {
	// const DEFAULT_INTERVAL = 60 * 1000;
	// const interval: NodeJS.Timeout = undefined;

	function setTime(nodeElem: typeof node, options: PrettyDateActionProps = {}) {
		const timestamp = options.timestamp ?? new Date().toISOString();
		// const format: string = options.format || 'MMM DD, YYYY';
		const relative = options.relative || true;

		const formatted = relative
			? getRelativeTime(new Date(timestamp))
			: Date.parse(timestamp).toString(10);

		if (relative) {
			nodeElem.setAttribute('title', timestamp.toString());
		}

		nodeElem.setAttribute('datetime', timestamp.toString());
		nodeElem.innerText = formatted;
	}

	setTime(node, options);

	return {
		update(newOptions = {}) {
			setTime(node, newOptions);
		}
	};
};

// import type { Action } from './types';
// // import type { ConfigType, OptionType } from 'dayjs/esm';
// // import dayjs from 'dayjs/esm/index.js';
// // import relativeTime from 'dayjs/esm/plugin/relativeTime';
// import dayjs from 'dayjs';
// import type { FormatOption, DateInput } from 'dayjs';

// // dayjs.extend(relativeTime);

// export interface PrettyDateProps extends HTMLTimeElement {
// 	timestamp?: DateInput;
// 	format?: FormatOption;
// 	relative?: boolean;
// 	live?: boolean | number;
// 	formatted?: string;
// }

// export type PrettyDateActionProps = Partial<
// 	Pick<PrettyDateProps, 'timestamp' | 'format' | 'relative' | 'live'>
// >;

// export const prettyDate: Action<PrettyDateActionProps> = (node, options = {}) => {
// 	const DEFAULT_INTERVAL = 60 * 1000;
// 	let interval = undefined;

// 	function setTime(nodeElem: typeof node, options: PrettyDateActionProps = {}) {
// 		const timestamp: DateInput = options.timestamp || new Date().toISOString();
// 		const format: FormatOption = options.format || 'MMM DD, YYYY';
// 		const relative = options.relative || true;
// 		const live = options.live || true;
// 		const formatted = relative
// 			? dayjs(timestamp).fromNow()
// 			: dayjs(timestamp).format(format.toString());

// 		if (relative) {
// 			nodeElem.setAttribute('title', timestamp.toString());
// 			if (typeof live === 'number' || live === true) {
// 				interval = setInterval(() => {
// 					nodeElem.innerText = dayjs(timestamp).fromNow();
// 				}, Math.abs(typeof live === 'number' ? live : DEFAULT_INTERVAL));
// 			}
// 		}

// 		nodeElem.setAttribute('datetime', timestamp.toString());
// 		nodeElem.innerText = formatted;
// 	}

// 	setTime(node, options);

// 	return {
// 		update(newOptions = {}) {
// 			setTime(node, newOptions);
// 		},
// 		destroy() {
// 			if (typeof interval === 'number') clearInterval(interval);
// 		}
// 	};
// };
