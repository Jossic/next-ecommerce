import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { Layout } from '@components/common';
import getAllProductsPaths from '@framework/product/get-all-products-paths';
import { getConfig } from '@framework/api/config';

export default function Product({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div>{product.slug}</div>;
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
	// const { data } = await

	return {
		props: {
			product: { slug: params?.slug },
		},
	};
};

Product.Layout = Layout;
