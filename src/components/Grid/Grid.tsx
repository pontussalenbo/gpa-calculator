/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export interface GridProperties {
	gap?: string;
	justifyContent?: string;
	alignItems?: string;
	mt?: string;
	ml?: string;
	mb?: string;
	mr?: string;
}

// Make a material-ui styled grid container
export const Grid = styled.div<GridProperties>`
	> div {
		padding-top: ${({ gap }) => gap ?? '0px'};
		padding-left: ${({ gap }) => gap ?? '0px'};
	}
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent ?? undefined};
	align-items: ${({ alignItems }) => alignItems ?? undefined};
	box-sizing: border-box;
	margin-top: -${({ gap }) => gap ?? '0px'};
	margin-top: ${({ mt }) => mt};¨
	margin-left: ${({ ml }) => ml};
	margin-bottom: ${({ mb }) => mb};
	margin-right: ${({ mr }) => mr};
	flex-direction: row;
	margin-left: -${({ gap }) => gap ?? '0px'};
	width: calc(100% + ${({ gap }) => gap ?? '0px'});
	flex-wrap: wrap;
`;
