import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
	const [state, setState] = useState<T>(() => {
		try {
			const value =
				typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
			return value ? (JSON.parse(value) as T) : initialValue;
		} catch (error) {
			console.error('Error reading from localStorage:', error);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value;
			setState(valueToStore);
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.error('Error writing to localStorage:', error);
		}
	};

	return [state, setValue] as const;
}

export default useLocalStorage;
