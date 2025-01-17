'use client';
import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { v4 as uuidv4 } from 'uuid';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ProductItem,
	ProductSchema,
	productSchema,
} from '@/schemas/product.schema';
import { Textarea } from '../ui/textarea';
import { useProductStore } from '@/store/use-product-store';
import { useToast } from '@/hooks/use-toast'

type ProductFormProps = {
	open: boolean;
	setOpen: (val: boolean) => void;
	initialValues?: ProductItem;
	edit?: boolean;
};

const ProductForm = ({
	open,
	setOpen,
	initialValues,
	edit = false,
}: ProductFormProps) => {
	const { addProduct, updateProduct } = useProductStore();
	const {toast} = useToast()

	const form = useForm<ProductSchema>({
		defaultValues: initialValues ?? {
			title: '',
			description: '',
			price: 0,
			images: [],
		},
		resolver: zodResolver(productSchema),
	});

	const onSubmit = (data: ProductSchema) => {
		if (edit) {
			updateProduct(initialValues?.id!, data);
			toast({title: 'Product successfully updated.'})
		} else {
			const id = uuidv4();
			addProduct({ id, ...data });
			toast({title: 'Product successfully created.'})
		}
		form.reset();
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{edit ? 'Update product' : 'Add product'}</DialogTitle>
					<DialogDescription>
						{edit
							? 'Enter new data to update product'
							: 'Enter product details in the below and create new product.'}
					</DialogDescription>
				</DialogHeader>
				<div className=''>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-4'
						>
							<FormField
								name='title'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Product name</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder='Product name'
												autoFocus
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name='price'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Price</FormLabel>
										<FormControl>
											<Input
												{...field}
												value={String(field.value)}
												onChange={e => {
													field.onChange(Number(e.target.value));
												}}
												placeholder='Product price'
												type='number'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name='images'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Image links</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												onChange={e => {
													const values = e.target.value.split(',');
													field.onChange(values);
												}}
												value={field.value?.join(',')}
												placeholder='e.g "http://unsplash.com/image1.jpg, http://unsplash.com/image2.jpg"'
											/>
										</FormControl>
										<FormDescription>
											Write here images of product links with comma.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name='description'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder='Product description'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex justify-end gap-3'>
								<Button
									variant='outline'
									type='button'
									onClick={() => {
										form.reset();
										setOpen(false);
									}}
								>
									Cancel
								</Button>
								<Button type='submit'>
									{edit ? 'Save changes' : 'Create product'}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ProductForm;
