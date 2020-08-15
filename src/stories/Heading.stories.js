import React from 'react';
import { text } from '@storybook/addon-knobs';

import Heading from '../components/Heading';

export default {
	title: 'Components/Heading',
	component: Heading
};

export const usage = () => (
	<>
		<Heading>
			<h1>{text('Title 1', 'Title 1')}</h1>
		</Heading>
		<Heading>
			<h2>{text('Title 2', 'Title 2')}</h2>
		</Heading>
		<Heading>
			<h3>{text('Title 3', 'Title 3')}</h3>
		</Heading>
		<Heading>
			<h4>{text('Title 4', 'Title 4')}</h4>
		</Heading>
		<Heading>
			<h5>{text('Title 5', 'Title 5')}</h5>
		</Heading>
		<Heading>
			<h6>{text('Title 6', 'Title 6')}</h6>
		</Heading>
	</>
);
