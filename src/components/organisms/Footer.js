import React from 'react';
import styled from 'styled-components';
import { 
	FaPhone,
	FaBuilding,
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram
} from 'react-icons/fa';

import Container from 'components/atoms/Container';
import Heading from 'components/atoms/Heading';
import Grid from 'components/atoms/Grid';

const Root = styled.footer`
	background-color: #2a2a2a;
	color: #aaa;
	padding: 40px 0;

	h6 {
		color: #fff;
		margin-top: 0;
		text-transform: uppercase;
	};
`;

const IconContainer = styled.span`
	margin-right: 8px;
`;

const FooterLink = styled.a`
	color: ${props => props.theme.colors.primary.main};
	text-decoration: none;

	&:hover {
		color: ${props => props.theme.colors.primary.dark};
	}
`;

const Footer = () => (
	<Root>
		<Container>
			<Grid md={3}>
				<div>
					<Heading>
						<h6>Henrique Auto Escola</h6>
					</Heading>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, officia sequi. Nobis magnam autem enim inventore, repudiandae voluptates eaque similique error voluptatum distinctio, pariatur cumque dolorum corporis reiciendis temporibus. Consequuntur.</p>
				</div>
				<div>
					<Heading>
						<h6>Contatos</h6>
					</Heading>
					<p>
						<IconContainer>
							<FaPhone />
						</IconContainer>
						(83)11234-4567
					</p>
					<p>
						<IconContainer>
							<FaBuilding />
						</IconContainer>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div>
					<Heading>
						<h6>Redes Sociais</h6>
					</Heading>
					<p>
						<FooterLink
							target="_blank"
							href="https://www.facebook.com/profile.php?id=100002487031344"
						>
							<IconContainer>
								<FaFacebookF />
							</IconContainer>
							Facebook
						</FooterLink>
					</p>
					<p>
						<FooterLink
							target="_blank"
							href="https://www.linkedin.com/in/matheus-henrique-fernandes-justino-83a180134/"
						>
							<IconContainer>
								<FaLinkedinIn />
							</IconContainer>
							LinkedIn
						</FooterLink>
					</p>
					<p>
						<FooterLink
							target="_blank"
							href="https://www.instagram.com/matheushenriquefj/"
						>
							<IconContainer>
								<FaInstagram />
							</IconContainer>
							Instagram
						</FooterLink>
					</p>
				</div>
			</Grid>
		</Container>
	</Root>
);

export default Footer;
