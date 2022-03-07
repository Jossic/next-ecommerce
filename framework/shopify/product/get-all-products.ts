import { Product } from '@common/types/product';
import { ProductConnection } from '@shopify/schema';
import { fetchAPI } from '@shopify/utils/fetch-api';
import { normalizeProduct } from '@shopify/utils/normalize';
import { getAllProductsQuery } from '@shopify/utils/queries/get-all-products';

type ReturnType = { products: ProductConnection };

const getAllProducts = async (): Promise<Product[]> => {
	const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery });

	const products =
		data.products.edges.map(({ node: product }) =>
			normalizeProduct(product)
		) ?? [];

	return products;
};

export default getAllProducts;
