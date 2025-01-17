import AddProduct from '@/components/shared/add-product';
import Container from '@/components/shared/container';
import Products from './_components/products';

export default function Home() {
	return (
		<div className='w-full min-h-screen py-6'>
			<Container>
				<div className='flex justify-between items-center mb-6'>
					<h2 className='md:text-2xl text-xl font-semibold'>Products</h2>
					<AddProduct />
				</div>
				<Products />
			</Container>
		</div>
	);
}
