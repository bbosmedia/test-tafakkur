import React, { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Ellipsis, PenIcon, Trash } from 'lucide-react';
import ProductForm from './product-form';
import { ProductItem } from '@/schemas/product.schema';
import RemoveProductModal from './remove-product-modal';

const ProductActionsDropdown = ({ product }: { product: ProductItem }) => {
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const [editFormOpen, setEditFormOpen] = useState<boolean>(false);
	const [removeFormOpen, setRemoveFormOpen] = useState<boolean>(false);
	return (
		<>
			<ProductForm
				open={editFormOpen}
				setOpen={setEditFormOpen}
				initialValues={product}
				edit
			/>
			<RemoveProductModal
				open={removeFormOpen}
				setOpen={setRemoveFormOpen}
				id={product.id}
				title={product.title}
			/>
			<DropdownMenu
				open={dropdownOpen}
				onOpenChange={setDropdownOpen}
			>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						size='icon'
					>
						<Ellipsis className='size-5' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					side='bottom'
					align='end'
				>
					<DropdownMenuItem onClick={() => setEditFormOpen(true)}>
						<PenIcon />
						<span>Edit product</span>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setRemoveFormOpen(true)}>
						<Trash />
						<span>Remove product</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default ProductActionsDropdown;
