/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export function useSearchParam({ key }: { key: string }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchParam = searchParams.get(key) ?? '';
	const [searchValue, setSearchValue] = useState<string>(searchParam);
	const debouncedValue = useDebounce(searchValue, 300);

	const setSearchParam = (value: string) => {
		if (value.trim().length === 0) {
			removeParam();
		} else {
			const params = new URLSearchParams(searchParams.toString());
			params.set(key, value);

			router.push(`?${params.toString()}`);
		}
	};

	const removeParam = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete(key);

		router.push(`?${params.toString()}`);
	};

	useEffect(() => {
		setSearchParam(debouncedValue);
	}, [debouncedValue]);

	return {
		searchValue,
		setSearchValue,
		searchParam,
		setSearchParam,
		removeParam,
	};
}
