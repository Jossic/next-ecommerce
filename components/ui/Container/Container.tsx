import { FC, ReactNode } from 'react';
import s from './Container.module.css';
import Link from 'next/link';

interface Props {
	children: ReactNode | ReactNode[];
}

const Container: FC<Props> = ({ children }) => {
	return <div className={s.container}>{children}</div>;
};

export default Container;
