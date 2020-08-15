import React from 'react';
import { render, fireEvent } from 'test-utils';

import Button, { ButtonColors, ButtonsVariants } from './Button';

test('renders a text', () => {
	const { getByText } = render(<Button>Click here</Button>);

	expect(getByText('Click here')).toBeInTheDocument();
});

test('trigger event on click', () => {
	const handleClick = jest.fn();

	const { getByRole } = render(<Button onClick={handleClick}></Button>);

	fireEvent.click(getByRole('button'));

	expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map(item => [item]))('renders with color %s', (color) => {
	const { asFragment } = render(<Button color={color}></Button>);

	expect(asFragment()).toMatchSnapshot();
});

test.each(Object.values(ButtonsVariants).map(item => [item]))('renders with variant %s', (variant) => {
	const { asFragment } = render(<Button variant={variant}></Button>);

	expect(asFragment()).toMatchSnapshot();
});

test('renders with color primary and vairant outlined', () => {
	const { asFragment } = render(<Button color="primary" variant="outlined"></Button>);

	expect(asFragment()).toMatchSnapshot();	
});

test('renders with color primary and vairant link', () => {
	const { asFragment } = render(<Button color="primary" variant="link"></Button>);

	expect(asFragment()).toMatchSnapshot();	
});
