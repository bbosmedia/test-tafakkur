'use client';
import React from 'react';
import Container from '@/components/shared/container';
import Products from './products';
import AddProduct from './add-product';

const HomePage = () => {
	return (
		<>
			
			<main>
				<div className='w-full min-h-screen py-6'>
					<Container>
						<div className='flex justify-between items-center mb-6'>
							<h2 className='md:text-2xl text-xl font-semibold'>Products</h2>
							<AddProduct />
						</div>
						<Products />
					</Container>
				</div>
			</main>
		</>
	);
};

export default HomePage;
