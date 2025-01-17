import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

const ProductImage = ({
	images,
	title,
}: {
	images?: string[];
	title: string;
}) => {
	if (!images) return <></>;

	if (images.length === 1)
		return (
			<Image
				src={images[0].trim()}
				className='w-full md:h-[500px] h-[250px] object-contain'
				width={500}
				height={500}
				alt={title}
			/>
		);
	return (
		<div className='px-10'>
			<Carousel className='w-full'>
				<CarouselContent>
					{images.map(item => (
						<div
							key={item}
							className='px-2'
						>
							<Image
								src={item.trim()}
								className='w-full md:h-[500px] h-[250px] object-contain'
								width={500}
								height={500}
								alt={title}
							/>
						</div>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default ProductImage;
