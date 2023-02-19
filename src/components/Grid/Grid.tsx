/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export interface GridProperties {
	gap?: string;
	justifyContent?: string;
	alignItems?: string;
}

// Make a material-ui styled grid container
export const Grid = styled.div<GridProperties>`
	> div {
		padding-top: ${({ gap }) => gap ?? '0px'};
		padding-left: ${({ gap }) => gap ?? '0px'};
	}
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
	align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
	box-sizing: border-box;
	margin-top: -${({ gap }) => gap ?? '0px'};
	flex-direction: row;
	margin-left: -${({ gap }) => gap ?? '0px'};
	width: calc(100% + ${({ gap }) => gap ?? '0px'});
	flex-wrap: wrap;
`;
