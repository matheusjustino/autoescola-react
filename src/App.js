import React from 'react';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';

import Home from 'components/pages/Home';
import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
  );
};

export default App;



