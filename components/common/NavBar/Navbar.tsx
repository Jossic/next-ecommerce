import { Container } from '@components/ui';
import { FC } from 'react';
import s from './Navbar.module.css';
import Link from 'next/link';

const Navbar: FC = () => {
	return (
		<Container>
			<div className={s.root}>
				<div className='flex flex-1 items-center'>
					<Link href='/'>
						<a className={s.logo}>
							<h1>NIPON-STORE</h1>
						</a>
					</Link>
					<nav className='ml-6 space-x-6'>
						<Link href='/'>
							<a className={s.link}>All</a>
						</Link>
						<Link href='/'>
							<a className={s.link}>Clothes</a>
						</Link>
						<Link href='/'>
							<a className={s.link}>Accesories</a>
						</Link>
						<Link href='/'>
							<a className={s.link}>Shoes</a>
						</Link>
					</nav>
				</div>
			</div>
		</Container>
	);
};

export default Navbar;
