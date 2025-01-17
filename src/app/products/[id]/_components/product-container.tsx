'use client';
import Container from '@/components/shared/container';
import { useProductStore } from '@/store/use-product-store';
import React from 'react';
import NoProduct from './no-product';
import ProductHeader from './product-header';
import ProductImage from './product-image';

const ProductContainer = ({ id }: { id: string }) => {
	const { products } = useProductStore();
	const product = products.find(item => item.id === id);
	if (!product) {
		return <NoProduct />;
	}

	return (
		<div className='w-full'>
			<Container className='py-10'>
				<ProductHeader product={product} />
				<ProductImage
					title={product.title}
					images={product.images}
				/>
				<h1 className='md:text-3xl sm:text-2xl text-xl block mb-6 font-bold'>{product.title}</h1>
				<p className='text-black/50 dark:text-white/50'>{product.description}</p>
			</Container>
		</div>
	);
};

export default ProductContainer;
