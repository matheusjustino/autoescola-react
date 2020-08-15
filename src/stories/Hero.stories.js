import React from 'react';
//import { text } from '@storybook/addon-knobs';

import Hero from 'components/molecules/Hero';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import automotive1280 from '../stories/assets/automotive-1280.jpg';
import automotive1920 from '../stories/assets/automotive-1920.jpg';
import highway1280 from '../stories/assets/highway-1280.jpg';
import highway1920 from '../stories/assets/highway-1920.jpg';

export default {
	title: 'Components/Molecules/Hero',
	component: Hero
};

export const usage = () => (
	<Hero image={highway1920}>
		<Heading>
			<h1>
				Ganhe sua <strong>liberdade</strong>
				<br/>
				para ir e vir.
			</h1>
		</Heading>
		<ul>
			<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
			<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
			<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
		</ul>
		<Button color="primary" variant="outlined">Matricule-se agora</Button>
	</Hero>
);
