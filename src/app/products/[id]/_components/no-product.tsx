import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const NoProduct = () => {
	return (
		<Container className='py-10'>
			<Card className='w-full h-[200px] flex flex-col items-center justify-center p-4'>
				<span className='text-sm text-black/50 dark:text-white'>
					No product found
				</span>
				<Link href='/'>
					<Button className='mt-2'>Go to products</Button>
				</Link>
			</Card>
		</Container>
	);
};

export default NoProduct;
