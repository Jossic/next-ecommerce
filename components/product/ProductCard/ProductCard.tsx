import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.css';

interface Props {
	product: Product;
	variant?: 'simple' | 'slim';
}

const placeholder = '/product-image-placeholder.svg';

const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
	return (
		<Link href={`/products/${product.slug}`}>
			<a className={s.root}>
				{variant === 'slim' ? (
					<>
						<div className='inset-0 flex items-center justify-center absolute z-20'>
							<span className='bg-black text-white p-3 font-bold text-xl'>
								{product.name}
							</span>
						</div>
						{product.images && (
							<Image
								className={s.productImage}
								width={320}
								height={320}
								// objectFit="cover"
								quality='85'
								layout='fixed'
								src={product.images[0].url ?? placeholder}
								alt={product.name ?? 'Product image'}
							/>
						)}
					</>
				) : (
					<>
						{' '}
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
					</>
				)}
			</a>
		</Link>
	);
};

export default ProductCard;
