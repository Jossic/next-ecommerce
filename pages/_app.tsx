import '@assets/main.css';
import { UIProvider, useUi } from '@components/ui/context';
// import '../styles/global.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
	Component,
	pageProps,
}: AppProps & { Component: { Layout: FC } }) {
	const Layout = Component.Layout ?? Noop;
	const ui = useUi();

	return (
		<UIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UIProvider>
	);
}

export default MyApp;
