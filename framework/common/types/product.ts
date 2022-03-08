export interface ProductImage {
	url: string;
	alt?: string;
}
export interface ProductPrice {
	currencyCode: 'USD' | 'EUR' | string;
	amount: number;
	totalPrice?: string;
}

export interface Product {
	id: string;
	name: string;
	description: string;
	slug: string;
	path: string;
	images: ProductImage[];
	price: ProductPrice;
}
