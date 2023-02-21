import { useState } from 'react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Theme';
import MainPage from 'pages/MainPage';

import './App.css';
import Toggle from 'components/ThemeToggler/ThemeToggler';
import Navbar from 'components/Navbar/Navbar';
/*
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

  */

function App(): JSX.Element {
	const [theme, setTheme] = useState('dark');

	const isDarkTheme = theme === 'dark';

	const themeSelector = (): DefaultTheme =>
		isDarkTheme ? darkTheme : lightTheme;

	const onThemeToggle = (): void => {
		setTheme(isDarkTheme ? 'light' : 'dark');
	};

	return (
		<ThemeProvider theme={themeSelector}>
			<GlobalStyles />
			<Navbar theme={theme} onToggleTheme={onThemeToggle} />
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
