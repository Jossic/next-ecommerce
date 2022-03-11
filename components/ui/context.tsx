import { createContext, FC, useContext, useState } from 'react';

export interface StateModifiers {
	openSidebar: () => void;
	closeSidebar: () => void;
}

export interface StateValues {
	isSidebarOpen: boolean;
}

const StateModifiers = {
	openSidebar: () => {},
	closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({
	...StateModifiers,
	...initialState,
});

export const UIProvider: FC = ({ children }) => {
	// const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const openSidebar = () => alert('open');
	const closeSidebar = () => alert('Close');

	const value = {
		openSidebar,
		closeSidebar,
		isSidebarOpen: false,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUi = () => {
	const context = useContext(UIContext);
	return context;
};
