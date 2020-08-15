import React from 'react';
import { render } from '@testing-library/react';

import GlobalStyle from './GlobalStyle';

test('match snapshot', () => {
	const { baseElement } = render(<GlobalStyle/>);

	expect(baseElement).toMatchSnapshot();
});
