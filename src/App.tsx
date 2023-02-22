import { useEffect, useState } from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Theme';
import MainPage from 'pages/MainPage';
import Navbar from 'components/Navbar/Navbar';

import './styles/App.css';
import useDarkMode from 'hooks/useTheme';

function App(): JSX.Element {
	const [theme, setTheme] = useDarkMode();

	const isDarkTheme = theme === 'dark';

	const themeSelector = (): DefaultTheme =>
		isDarkTheme ? darkTheme : lightTheme;

	const onThemeToggle = (): void => {
		setTheme();
	};

	useEffect(() => {}, []);

	return (
		<ThemeProvider theme={themeSelector}>
			<GlobalStyles />
			{theme ? (
				<>
					<Navbar theme={theme} onToggleTheme={onThemeToggle} />
					<MainPage />
				</>
			) : null}
		</ThemeProvider>
	);
}

export default App;
