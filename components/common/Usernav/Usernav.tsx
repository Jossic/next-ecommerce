import { Container } from '@components/ui';
import { FC } from 'react';
import s from './Usernav.module.css';
import Link from 'next/link';
import Bag from '@components/Bag';
import Heart from '@components/Heart';
import { useUi } from '@components/ui/context';

const Usernav: FC = () => {
	const { openSidebar } = useUi();
	return (
		<nav>
			<ul className={s.list}>
				<li className={s.item}>
					<Bag onClick={openSidebar} />
				</li>
				<li className={s.item}>
					<Link href='/wishlist'>
						<a>
							<Heart />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Usernav;
