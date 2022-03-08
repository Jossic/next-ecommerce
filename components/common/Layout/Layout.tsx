import { FC } from 'react';

const Layout: FC = ({ children }) => {
	return <div className='bg-red-800 text-white'>{children}</div>;
};

export default Layout;
