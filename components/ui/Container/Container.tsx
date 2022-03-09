import { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';
import s from './Container.module.css';

interface Props {
	children: ReactNode | ReactNode[];
	element?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, element: Component = 'div' }) => {
	return <Component className={s.container}>{children}</Component>;
};

export default Container;
