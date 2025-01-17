'use client';
import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { useProductStore } from '@/store/use-product-store';
import { useToast } from '@/hooks/use-toast';

interface RemoveProductModalProps {
	open: boolean;
	setOpen: (val: boolean) => void;
	title: string;
	id: string;
}

const RemoveProductModal = ({
	open,
	setOpen,
	title,
	id,
}: RemoveProductModalProps) => {
	const { deleteProduct } = useProductStore();
	const { toast } = useToast();

	const handleRemove = () => {
		deleteProduct(id);
		toast({ title: `${title} is removed successfully.` });
		setOpen(false);
	};
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Remove product</DialogTitle>
					<DialogDescription>Do you want to remove {title}?</DialogDescription>
				</DialogHeader>
				<div className='flex items-center justify-end'>
					<Button
						type='button'
						variant='outline'
						onClick={() => setOpen(false)}
					>
						Cancel
					</Button>
					<Button
						variant='destructive'
						type='button'
						onClick={handleRemove}
					>
						Delete product
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default RemoveProductModal;
