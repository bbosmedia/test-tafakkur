'use client';
import { Card } from '@/components/ui/card';
import { useProductStore } from '@/store/use-product-store';
import React, { useEffect } from 'react';
import ProductCard from './product-card';

const Products = () => {
	const { products } = useProductStore();

	if (products.length === 0)
		return (
			<Card className='w-full h-[200px] flex items-center justify-center p-4'>
				<p className='text-sm text-black/50 dark:text-white/50'>No products</p>
			</Card>
		);
	return (
		<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
			{products.map(item => (
				<ProductCard
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
};

export default Products;
