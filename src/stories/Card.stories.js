import React from 'react';

import Card, { CardBody, CardMedia } from 'components/atoms/Card';
import Section from 'components/molecules/Section';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';

import PlacholderImage from 'stories/assets/card-placeholder.jpg';

export default {
	title: 'Components/Atoms/Card',
	component: Card,
	subcomponents: { CardBody, CardMedia }
};

export const usage = () => (
	<Section inverse>
		<Card>
			<CardBody>
				<Heading>
					<h6>Título</h6>
				</Heading>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				<div>
					<Button color="primary" variant="link">Saiba mais</Button>
				</div>
			</CardBody>
		</Card>
	</Section>
);

export const withMedia = () => (
	<Section inverse>
		<Card>
			<CardMedia image={PlacholderImage} />
			<CardBody>
				<Heading>
					<h6>Título</h6>
				</Heading>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				<div>
					<Button color="primary" variant="link">Saiba mais</Button>
				</div>
			</CardBody>
		</Card>
	</Section>	
);
