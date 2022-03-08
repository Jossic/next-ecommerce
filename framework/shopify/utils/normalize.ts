import { Product } from '@common/types/product';
import { ImageEdge, MoneyV2, Product as ShopifyProduct } from '../schema';

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
	edges.map(({ node: { originalSrc: url, ...rest } }) => ({
		url: `/images/${url}`,
		...rest,
	}));
const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
	if (currencyCode === 'EUR') {
		return { totalPrice: `${amount} €`, amount: +amount, currencyCode };
	} else if (currencyCode === 'USD')
		return { totalPrice: `$${amount}`, amount: +amount, currencyCode };
	else return { amount: +amount, currencyCode };
};

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
	const {
		id,
		title: name,
		handle,
		vendor,
		description,
		images: imageConnection,
		priceRange,
		...rest
	} = productNode;
	const product = {
		id,
		name,
		vendor,
		description,
		path: `/${handle}`,
		slug: handle.replace(/^\/+|\/+$/g, ''),
		images: normalizeProductImages(imageConnection),
		price: normalizeProductPrice(priceRange.minVariantPrice),
		...rest,
	};

	return product;
};
