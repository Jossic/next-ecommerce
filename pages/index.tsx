import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticProps } from 'next';
import getAllProducts from '../framework/shopify/product/get-all-products';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(`products =>`, products);
	return (
		<div>
			{products.map((product) => (
				<div key={product.id}>{product.title}</div>
			))}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const products = await getAllProducts();

	return {
		props: {
			products,
		},
	};
};

export default Home;
