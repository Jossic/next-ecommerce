import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';
import { getConfig } from '@framework/api/config';
import { getAllProducts } from '@framework/product';
import type { InferGetStaticPropsType } from 'next';

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Grid layout='A'>
				{products.slice(0, 3).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Grid>
			<Hero
				headline='Hello'
				description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, tempora! Accusamus fugiat a dolor repellendus modi pariatur, consequuntur deleniti iste numquam consectetur. Quidem, nulla! Incidunt, maiores rerum! Aut voluptates sint, necessitatibus expedita blanditiis consequatur? Aut saepe expedita ad maiores. Nihil aliquam eaque cumque iure quis necessitatibus, sit officia culpa voluptatum!'
			/>
			<Marquee variant='secondary'>
				{products.slice(0, 3).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						variant='slim'
					/>
				))}
			</Marquee>
			<Grid layout='B'>
				{products.slice(0, 3).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Grid>
			<Marquee variant='secondary'>
				{products.slice(0, 3).map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						variant='slim'
					/>
				))}
			</Marquee>
		</>
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
