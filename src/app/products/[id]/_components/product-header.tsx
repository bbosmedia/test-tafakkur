import { ProductItem } from '@/schemas/product.schema';
import React from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ProductActionsDropdown from '@/components/shared/product-actions-dropdown'
const ProductHeader = ({ product }: { product: ProductItem }) => {
	return (
		<div className='grid grid-cols-[1fr,40px] mb-10'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Products</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{product.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<ProductActionsDropdown product={product} />
		</div>
	);
};

export default ProductHeader;
