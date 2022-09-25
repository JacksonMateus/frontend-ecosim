import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SimulationSection = styled.div`
	padding: 160px 0;
	background-color: blue;
`;

export const SimulationTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
`;

export const SimulationContainer = styled.div`
	display: flex;
`;
export const SimulationColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
	position: relative;

	
`;

export const SimulationRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;

`;





