/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { device } from 'utils/breakpoints';

interface ContainerProperties {
	fluid?: boolean;
	mt?: string;
	mb?: string;
	width?: string;
}

const Container = styled.div<ContainerProperties>`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	width: ${({ width }) => width ?? '100%'};
	padding-right: 15px;
	padding-left: 15px;
	margin-top: ${({ mt }) => mt ?? '0'};
	margin-bottom: ${({ mb }) => mb ?? '0'};
	margin-right: auto;
	margin-left: auto;
	${({ fluid }) =>
		!fluid &&
		`
	@media ${device.mobileS} {
		max-width: 100%;
	}
	@media ${device.mobileL} {
		max-width: 100%;
	}
	@media ${device.tablet} {
		max-width: 100%;
	}
	@media ${device.laptop} {
		max-width: 980px;
	}

	@media ${device.desktop} {
		max-width: 1280px;
	}
	
	`}

	max-width: ${({ fluid }) => (fluid ? '100%' : '1280px')};
`;

export default Container;
