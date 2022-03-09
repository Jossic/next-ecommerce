import { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';
import s from './Container.module.css';

interface Props {
	children: ReactNode | ReactNode[];
	tag?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, tag: Wrapper = 'div' }) => {
	return <Wrapper className={s.container}>{children}</Wrapper>;
};

export default Container;
