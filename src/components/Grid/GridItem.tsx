/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { device } from 'utils/breakpoints';
import calcColWidth from 'utils/calcColWidth';

export interface GridItemProperties {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

// Make a material-ui styled grid item
export const GridItem = styled.div<GridItemProperties>`
	position: relative;
	width: 100%;
	height: auto;

	${({ xs }) =>
		xs &&
		`@media ${device.mobileS} {
		flex: 0 0 ${calcColWidth(xs)};
		max-width: ${calcColWidth(xs)};
	}`}

	${({ sm }) =>
		sm &&
		`@media ${device.mobileL} {
		flex: 0 0 ${calcColWidth(sm)};
		max-width: ${calcColWidth(sm)};
	}`}

	${({ md }) =>
		md &&
		`@media ${device.tablet} {
		flex: 0 0 ${calcColWidth(md)};
		max-width: ${calcColWidth(md)};
	}`}

	${({ lg }) =>
		lg &&
		`@media ${device.laptop} {
		flex: 0 0 ${calcColWidth(lg)};
		max-width: ${calcColWidth(lg)};
	}`}
`;
