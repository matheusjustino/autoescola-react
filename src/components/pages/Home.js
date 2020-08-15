import React from 'react';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';

import Hero from 'components/molecules/Hero';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Feature from 'components/atoms/Feature';
import Grid from 'components/atoms/Grid';
import Section from 'components/molecules/Section';
import Footer from 'components/organisms/Footer';

import HeroImage from 'assets/highway-1920.jpg';
import AboutVideo from 'assets/about.mp4';

const Home = () => (
	<>
		<Hero image={HeroImage}>
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
		<Section>
			<Grid sm={2} md={4}>
				<Feature icon={<FaCar></FaCar>} title="Maior e melhor frota">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</Feature>
				<Feature icon={<FaKey></FaKey>} title="Habilitação mais rápida">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</Feature>
				<Feature icon={<FaMapMarkedAlt></FaMapMarkedAlt>} title="Excelente localização">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</Feature>
				<Feature icon={<FaAccessibleIcon></FaAccessibleIcon>} title="Acessibilidade">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</Feature>
			</Grid>
		</Section>
		<Section inverse>
			<Heading>
				<h2>Conheça nossos serviços</h2>
			</Heading>
		</Section>
		<Section>
			<Grid md={2}>
				<div>
					<Heading>
						<h2>Henrique Auto Escola</h2>
					</Heading>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<div>
						<Button color="primary">Saiba mais</Button>
					</div>
				</div>
				<div>
					<video src={AboutVideo} width="100%" autoPlay loop />
				</div>
			</Grid>
			
		</Section>
		<Section inverse>
			<Heading>
				<h2>Dúvidas recorrentes</h2>
			</Heading>
		</Section>
		<Footer />
	</>
);

export default Home;
