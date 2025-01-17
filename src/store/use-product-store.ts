import { ProductStore } from '@/types';
import { create } from 'zustand';

export const useProductStore = create<ProductStore>(set => ({
	products: [],
	addProduct: product =>
		set(state => {
			const updatedProducts = [...state.products, product];
			localStorage.setItem('products', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		}),
	updateProducts: items =>
		set(state => {
			return { products: items };
		}),
	updateProduct: (id, updatedProduct) =>
		set(state => {
			const updatedProducts = state.products.map(product =>
				product.id === id ? { ...product, ...updatedProduct } : product
			);
			localStorage.setItem('products', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		}),
	deleteProduct: id =>
		set(state => {
			const updatedProducts = state.products.filter(
				product => product.id !== id
			);
			localStorage.setItem('products', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		}),
}));
