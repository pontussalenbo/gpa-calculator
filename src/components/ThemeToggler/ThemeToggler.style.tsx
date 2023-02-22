/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface ToggleContainerProps {
	lightTheme: boolean;
}

export const ToggleContainer = styled.button<ToggleContainerProps>`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 5rem;
	height: 2.5rem;
	margin: 0 auto;
	border-radius: 30px;
	border: 2px solid ${({ theme }) => theme.toggleBorder};
	font-size: 0.5rem;
	padding: 0.5rem;
	overflow: hidden;
	cursor: pointer;

	span {
		max-width: 2.5rem;
		height: auto;
		transition: all 0.3s linear;

		&:first-child {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(0)' : 'translateY(100px)'};
		}

		&:nth-child(2) {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
		}
	}
`;

export const ThemeIcon = styled.span`
	font-size: 1.5rem;
`;
