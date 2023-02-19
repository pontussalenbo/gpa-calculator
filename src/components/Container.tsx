import styled from 'styled-components';
import { device } from 'utils/breakpoints';

interface ContainerProperties {
	fluid?: boolean;
}

const Container = styled.div<ContainerProperties>`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
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
