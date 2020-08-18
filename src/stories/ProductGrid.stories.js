import React from 'react';

import ProductGrid from 'components/organisms/ProductGrid';

import PlacholderImage from 'stories/assets/card-placeholder.jpg';

export default {
	title: 'Components/Organisms/ProductGrid',
	component: ProductGrid
};

export const usage = () => (
	<ProductGrid
		products={[
			{
				id: 1,
				image: PlacholderImage,
				title: 'Título 1',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 2,
				image: PlacholderImage,
				title: 'Título 2',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 3,
				image: PlacholderImage,
				title: 'Título 3',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 4,
				image: PlacholderImage,
				title: 'Título 4',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 5,
				image: PlacholderImage,
				title: 'Título 5',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 6,
				image: PlacholderImage,
				title: 'Título 6',
				summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			}
		]}
	/>
);
