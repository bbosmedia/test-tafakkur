import { z } from 'zod';

export const productSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	description: z.string().min(1, 'Description is required'),
	price: z.number().min(0, 'Price must be a non-negative number'),
	images: z.array(z.string().url()).optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
export type ProductItem = ProductSchema & { id: string };
