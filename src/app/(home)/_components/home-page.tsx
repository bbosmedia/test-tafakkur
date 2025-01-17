'use client';
import React, { Suspense } from 'react';
import Header from '@/components/layout/header';
import Container from '@/components/shared/container';
import Products from './products';

const HomePage = () => {
	return (
		<Suspense>
			<Header></Header>
			<main>
				<div className='w-full min-h-screen py-6'>
					<Container>
						<div className='flex justify-between items-center mb-6'>
							<h2 className='md:text-2xl text-xl font-semibold'>Products</h2>
						</div>
						<Products />
					</Container>
				</div>
			</main>
		</Suspense>
	);
};

export default HomePage;
