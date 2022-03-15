import { APIConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '@framework/schema';
import { normalizeProduct, getAllProductsQuery } from '../utils';

type ReturnType = { products: ProductConnection };

const getProduct = async (config: APIConfig): Promise<any> => {
	return { product: { name: 'gdhdfjgdfgj', slug: 'slug' } };
};

export default getProduct;
