import { createContext, FC, useContext, useState } from 'react';

const UIContext = createContext<{ [key: string]: any }>({
	uiState: 'defaultState',
});

export const UIProvider: FC = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const uiState = {
		isSidebarOpen,
		setIsSidebarOpen,
	};

	return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUi = () => {
	const context = useContext(UIContext);
	return context;
};
