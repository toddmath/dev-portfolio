/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import type { Action } from './types';

const defaults = {
	// color: 'currentColor',
	class: 'text-primary-content bg-primary',
	opacity: 0.1,
	centered: false,
	spreadingDuration: '.4s',
	spreadingDelay: '0s',
	spreadingTimingFunction: 'linear',
	clearingDuration: '1s',
	clearingDelay: '0s',
	clearingTimingFunction: 'ease-in-out'
};

type Options = Partial<typeof defaults>;

function isEventTouch(e: TouchEvent | Event): e is TouchEvent {
	return 'touches' in e && e instanceof TouchEvent;
}

function isEventMouse(e: MouseEvent | Event): e is MouseEvent {
	return 'buttons' in e && e instanceof MouseEvent;
}

function isEventPointer(e: PointerEvent | Event): e is PointerEvent {
	return 'pointerId' in e && e instanceof PointerEvent;
}

// function isEventKeyboard(e: KeyboardEvent | Event): e is KeyboardEvent {
// 	return 'key' in e && 'keyCode' in e && e instanceof KeyboardEvent;
// }

export function RippleStart<
	E extends PointerEvent | TouchEvent | KeyboardEvent | MouseEvent = PointerEvent
>(e: E, options: Options = {}) {
	e.stopImmediatePropagation();
	const opts = { ...defaults, ...options };
	// let isTouchEvent = false;
	let target = e.currentTarget as Element;
	// let touches: TouchList = []
	if (isEventTouch(e)) {
		// isTouchEvent = e.touches ? !!e.touches[0] : false;
		// target = e.touches[0].target
		target = e.targetTouches[0].target as Element;
		// touches = e.changedTouches
	}
	// const isTouchEvent = e.type === 'touch' ? e?.touches ? !!e.touches?.[0] : false : false;
	// const target = isTouchEvent ? e?.touches?.[0]?.currentTarget : e.currentTarget;

	const ripple = document.createElement('div');
	const rippleStyle = ripple.style;
	ripple.className = `material-ripple ${opts.class}`;
	rippleStyle.position = 'absolute';
	rippleStyle.color = 'inherit';
	rippleStyle.borderRadius = '50%';
	rippleStyle.pointerEvents = 'none';
	rippleStyle.width = '100px';
	rippleStyle.height = '100px';
	rippleStyle.marginTop = '-50px';
	rippleStyle.marginLeft = '-50px';
	target.appendChild(ripple);
	rippleStyle.opacity = opts.opacity.toString();
	rippleStyle.transition = `transform ${opts.spreadingDuration} ${opts.spreadingTimingFunction} ${opts.spreadingDelay},opacity ${opts.clearingDuration} ${opts.clearingTimingFunction} ${opts.clearingDelay}`;
	rippleStyle.transform = 'scale(0) translate(0,0)';
	// rippleStyle.background = opts.color;

	const targetRect = target.getBoundingClientRect();
	if (opts.centered) {
		rippleStyle.top = `${targetRect.height / 2}px`;
		rippleStyle.left = `${targetRect.width / 2}px`;
	} else {
		let distX = 0,
			distY = 0;
		if (isEventTouch(e)) {
			distY = e.touches[0].clientY;
			distX = e.touches[0].clientX;
		} else if (isEventMouse(e) || isEventPointer(e)) {
			distY = e.clientY;
			distX = e.clientX;
		}
		// const distY = isTouchEvent ? e.touches[0].clientY : e.clientY;
		// const distX = isTouchEvent ? e.touches[0].clientX : e.clientX;
		rippleStyle.top = `${distY - targetRect.top}px`;
		rippleStyle.left = `${distX - targetRect.left}px`;
	}

	rippleStyle.transform = `scale(${
		Math.max(targetRect.width, targetRect.height) * 0.02
	}) translate(0,0)`;

	return ripple;
}

/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
export function RippleStop<E extends HTMLElement = HTMLElement>(ripple: E) {
	if (ripple) {
		ripple.addEventListener('transitionend', (e) => {
			if (e.propertyName === 'opacity') ripple.remove();
		});
		ripple.style.opacity = `0`;
	}
}

const ripple: Action<Options> = (node, options = {}) => {
	let destroyed = false;
	let ripple: HTMLDivElement;
	let keyboardActive = false;

	const handleStart = (e: PointerEvent | KeyboardEvent | TouchEvent) => {
		ripple = RippleStart(e, options);
	};

	const handleStop = () => RippleStop(ripple);

	const handleKeyboardStart = (e: KeyboardEvent) => {
		// NOTE: keyCode 13 == code 'Enter' and keyCode 32 == code 'Space'
		// if (!keyboardActive && (e.keyCode === 13 || e.keyCode === 32)) {
		if (!keyboardActive && (e.code === 'Enter' || e.code === 'Space')) {
			ripple = RippleStart(e, { ...options, centered: true });
			keyboardActive = true;
		}
	};

	const handleKeyboardStop = () => {
		keyboardActive = false;
		handleStop();
	};

	// type E =

	const eventHandlers: Record<string, EventListenerOrEventListenerObject> = {
		pointerdown: handleStart,
		pointerup: handleStop,
		pointerleave: handleStop,
		keydown: handleKeyboardStart,
		keyup: handleKeyboardStop
	};

	function setup() {
		node.classList.add('s-ripple-container');
		for (const [type, handler] of Object.entries(eventHandlers)) {
			node.addEventListener(type, handler);
		}
		// node.addEventListener('pointerdown', handleStart);
		// node.addEventListener('pointerup', handleStop);
		// node.addEventListener('pointerleave', handleStop);
		// node.addEventListener('keydown', handleKeyboardStart);
		// node.addEventListener('keyup', handleKeyboardStop);
		destroyed = false;
	}

	function destroy() {
		node.classList.remove('s-ripple-container');
		for (const [type, handler] of Object.entries(eventHandlers)) {
			node.removeEventListener(type, handler);
		}
		// node.removeEventListener('pointerdown', handleStart);
		// node.removeEventListener('pointerup', handleStop);
		// node.removeEventListener('pointerleave', handleStop);
		// node.removeEventListener('keydown', handleKeyboardStart);
		// node.removeEventListener('keyup', handleKeyboardStop);
		destroyed = true;
	}

	if (options) setup();

	return {
		update(newOptions) {
			options = newOptions;
			if (options && destroyed) setup();
			else if (!(options || destroyed)) destroy();
		},
		destroy
	};
};

export default ripple;
