'use client';
import { useProductStore } from '@/store/use-product-store';
import React, { useEffect } from 'react';

const GetLocalStorageProducts = () => {
	const { updateProducts } = useProductStore();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storage = localStorage.getItem('products');
			if (storage) {
				const items = JSON.parse(storage);
				updateProducts(items);
			}
		}
	}, []);
	return <></>;
};

export default GetLocalStorageProducts;
