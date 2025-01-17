import AddProduct from '@/components/shared/add-product';
import Container from '@/components/shared/container';

export default function Home() {
	return (
		<div className='w-full min-h-screen py-6'>
			<Container>
				<div className='flex justify-between items-center'>
					<h2 className='md:text-2xl text-xl font-semibold'>Products</h2>
					<AddProduct />
				</div>
				<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'></div>
			</Container>
		</div>
	);
}
