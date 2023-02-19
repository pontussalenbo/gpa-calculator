import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import GradeInput from './components/GradeInput';
import './App.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

function App(): JSX.Element {
	return (
		<>
			<GlobalStyle />
			<GradeInput />
		</>
	);
}

export default App;
