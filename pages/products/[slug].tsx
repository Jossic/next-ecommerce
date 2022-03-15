import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths, getProduct } from '@framework/product';

export default function Product({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div>{product.name}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const config = getConfig();
	const { products } = await getAllProductsPaths(config);

	return {
		paths: products.map((product) => ({ params: { slug: product.slug } })),
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: GetStaticPropsContext<{ slug: string }>) => {
	const config = getConfig();
	const { product } = await getProduct(config);
	console.log(`product =>`, product);

	return {
		props: {
			product,
		},
	};
};

Product.Layout = Layout;
