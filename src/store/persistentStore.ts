export type PersistentSet<T> = (value: T) => void;

export type PersistentWritable<T> = {
	subscribe: (subscription: PersistentSet<T>) => () => void;
	set: PersistentSet<T>;
	update: (updaterFunction: (currentValue: T) => T) => void;
};

function isError<T>(e: T | Error): e is Error {
	return e instanceof Error;
}

// function tryCatch<T>(fn: () => T): T | void {
// 	try {
// 		return fn();
// 	} catch (error: unknown) {
// 		if (isError(error)) console.log(error);
// 	}
// }

export const persistentWritable = <T>(storeKey: string, initialValue: T): PersistentWritable<T> => {
	let subscriptions: Array<PersistentSet<T>> = [];
	let storeValue: T;

	const safeParse = (jsonString: string) => {
		try {
			return JSON.parse(jsonString);
		} catch (error: unknown) {
			if (isError(error)) console.log(error);
		}
	};

	const safeSetItem = (key: string, value: T) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error: unknown) {
			if (error instanceof Error) console.log(error);
		}
	};

	const safeGetItem = (key: string) => {
		try {
			return localStorage.getItem(key);
		} catch (error: unknown) {
			if (error instanceof Error) console.log(error);
		}
	};

	// let currentStoreString = safeGetItem(storeKey);
	if (safeGetItem(storeKey) == null) {
		storeValue = initialValue;
		safeSetItem(storeKey, storeValue);
	} else {
		storeValue = safeParse(safeGetItem(storeKey));
	}

	let storeChannel = new BroadcastChannel(storeKey);
	storeChannel.onmessage = (event) => {
		storeValue = safeParse(safeGetItem(storeKey));
		if (event.data === storeKey) subscriptions.forEach((sub) => sub(storeValue));
	};

	const subscribe = (subscription: PersistentSet<T>) => {
		subscription(storeValue);
		subscriptions = [...subscriptions, subscription];

		if (subscriptions.length === 1 && storeChannel == null) {
			storeChannel = new BroadcastChannel(storeKey);
		}

		// INFO: Unsubscribe function
		return () => {
			subscriptions = subscriptions.filter((s) => s !== subscription);
			if (storeChannel && subscriptions.length === 0) {
				storeChannel.close();
				storeChannel = null;
			}
		};
	};

	const set: PersistentSet<T> = (value) => {
		storeValue = value;
		safeSetItem(storeKey, value);
		subscriptions.forEach((sub) => sub(storeValue));
		if (storeChannel) storeChannel.postMessage(storeKey);
	};

	return {
		subscribe,
		set,
		update: (updaterFunction) => set(updaterFunction(storeValue))
	};
};
