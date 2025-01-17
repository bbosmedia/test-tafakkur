import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

const Container = ({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn('max-w-[1280px] w-full px-6 mx-auto', className)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;
