import React from 'react';

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



