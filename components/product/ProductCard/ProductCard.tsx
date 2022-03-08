import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
	product: Product;
}

const placeholder = '/product-image-placeholder.svg';

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<Link href={`/products/${product.slug}`}>
			<a>
				<div>
					<h3>
						<span>{product.name}</span>
					</h3>
					<span>$4</span>
				</div>
				{product.images && (
					<Image
						width={540}
						height={540}
						// objectFit="cover"
						quality='85'
						layout='responsive'
						src={placeholder}
						alt={product.name ?? 'Product image'}
					/>
				)}
			</a>
		</Link>
	);
};

export default ProductCard;
