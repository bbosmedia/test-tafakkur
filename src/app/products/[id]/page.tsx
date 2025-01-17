import ProductContainer from './_components/product-container';

type Props = {
	params: {
		id: string;
	};
};

const SingleProduct = ({ params: { id } }: Props) => {
	return <ProductContainer id={id} />;
};

export default SingleProduct;
