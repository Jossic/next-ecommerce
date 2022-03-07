import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticProps } from 'next';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			{JSON.stringify(products)}
			{/* {products.map((product) => (
				<div key={product.id}>{product.title}</div>
			))} */}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const config = getConfig();
	const products = await getAllProducts(config);

	return {
		props: {
			products,
		},
	};
};

export default Home;
