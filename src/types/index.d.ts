import { ProductItem } from '@/schemas/product.schema';

interface ProductStore {
	products: ProductItem[];
	addProduct: (product: ProductItem) => void;
	updateProduct: (id: string, updatedProduct: Partial<ProductItem>) => void;
	updateProducts: (items: ProductItem[]) => void;
	deleteProduct: (id: string) => void;
}
