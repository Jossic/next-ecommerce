import { APIConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { normalizeProduct, getAllProductsQuery } from '../utils';

type ReturnType = { products: Pick<Product, 'slug'>[] };

const getAllProductsPaths = async (config: APIConfig): Promise<ReturnType> => {
	return {
		products: [
			{
				slug: 'cool-hat',
			},
			{
				slug: 'lightweight-jacket',
			},
			{
				slug: 't-shirt',
			},
		],
	};

	// const { data } = await config.fetch<ReturnType>({

	// 	url: config.apiUrl,
	// 	query: getAllProductsQuery,
	// });

	// const products =
	// 	data.products.edges.map(({ node: product }) =>
	// 		normalizeProduct(product)
	// 	) ?? [];

	// return products;
};

export default getAllProductsPaths;
