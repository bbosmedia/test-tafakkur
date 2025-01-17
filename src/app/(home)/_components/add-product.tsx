'use client';
import ProductForm from '@/components/shared/product-form';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const AddProduct = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<Button
				onClick={() => setOpen(!open)}
				type='button'
				disabled={open}
			>
				Add product
			</Button>
			<ProductForm
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

export default AddProduct;
