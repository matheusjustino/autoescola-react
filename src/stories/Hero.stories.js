import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from '../components/Hero';
import Heading from '../components/Heading';
import automotive1280 from '../stories/assets/automotive-1280.jpg';
import automotive1920 from '../stories/assets/automotive-1920.jpg';
import highway1280 from '../stories/assets/highway-1280.jpg';
import highway1920 from '../stories/assets/highway-1920.jpg';

export default {
	title: 'Components/Hero',
	component: Hero
};

export const usage = () => (
	<Hero image={highway1920}>
		<Heading>
			<h1>
				{text('Title', 'Ganhe sua liberdade para ir e vir.')}
				{/* {Ganhe sua <strong>liberdade</strong>
				<br/>
				para ir e vir.} */}
			</h1>
		</Heading>
		<ul>
			<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
			<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
			<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
		</ul>
		<button>Matricule-se agora</button>
	</Hero>
);
