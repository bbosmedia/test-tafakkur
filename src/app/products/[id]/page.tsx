import ProductContainer from './_components/product-container';

const SingleProduct = async ({
	params,
}: {
	params: Promise<{
		id: string;
	}>;
}) => {
	const id = (await params).id;
	return <ProductContainer id={id} />;
};

export default SingleProduct;
