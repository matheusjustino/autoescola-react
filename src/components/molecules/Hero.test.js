import React from 'react';
import { render } from 'test-utils';

import Hero from './Hero';

test('renders Hero with children', () => {
	const { debug, getByText } = render(
		<Hero>
			<p>Matheus Henrique</p>
		</Hero>
	);

	//debug(); // will render DOM in your terminal

	expect(getByText('Matheus Henrique')).toBeInTheDocument();
});

test('renders image background', () => {
	const image = 'http://test/image.jpg';

	const { getByTestId } = render(
		<Hero image={image}></Hero>
	);

	expect(getByTestId('hero')).toHaveStyleRule({
		backgroundImage: image
	});
});
