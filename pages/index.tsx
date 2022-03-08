import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticProps } from 'next';

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			{products.slice(0, 3).map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export const getStaticProps = async () => {
	const config = getConfig();
	const products = await getAllProducts(config);

	return {
		props: {
			products,
		},
	};
};

Home.Layout = Layout;
