import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { Layout } from '@components/common';

export default function Product({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div>{product.slug}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					slug: 'cool-hat',
				},
			},
			{
				params: {
					slug: 'lightweight-jacket',
				},
			},
			{
				params: {
					slug: 't-shirt',
				},
			},
			,
		],
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
