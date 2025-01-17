import { formatCurrency } from '@/lib/format-currency';
import { ProductItem } from '@/schemas/product.schema';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({
	id,
	title,
	images,
	description,
	price,
}: ProductItem) => {
	return (
		<div className='w-full border border-black/10 dark:border-white/10 rounded-xl overflow-hidden'>
			{images && images?.length > 0 ? (
				<Image
					src={images[0]}
					alt={title}
					width={380}
					height={240}
					className='w-full h-[240px] object-cover'
					quality={75}
				/>
			) : (
				<div className='h-[240px] w-full bg-transparent'></div>
			)}
			<div className='p-4'>
				<Link
					href={`products/${id}`}
					className='inline-block text-2xl font-semibold'
				>
					{title}
				</Link>
				<p className='text-lg font-medium'>{formatCurrency(price)}</p>
				<p className='mt-2 text-black/50 dark:text-white/50'>{description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
