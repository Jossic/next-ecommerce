import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.css';

interface Props {
	product: Product;
}

const placeholder = '/product-image-placeholder.svg';

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<Link href={`/products/${product.slug}`}>
			<a className={s.root}>
				<div className={s.productBg}></div>
				<div className={s.productTag}>
					<h3 className={s.productTitle}>
						<span>{product.name}</span>
					</h3>
					<span className={s.productPrice}>
						{product.price.totalPrice}
					</span>
				</div>
				{product.images && (
					<Image
						className={s.productImage}
						width={540}
						height={540}
						// objectFit="cover"
						quality='85'
						layout='responsive'
						src={product.images[0].url ?? placeholder}
						alt={product.name ?? 'Product image'}
					/>
				)}
			</a>
		</Link>
	);
};

export default ProductCard;
