/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from 'components/Button/Button.style';
import styled from 'styled-components';

export const StyledTable = styled.table`
	width: 100%;
	border: none;
	border-collapse: collapse;
	box-sizing: border-box;
	td,
	th {
		border: none;
	}
	td {
		padding: 0.5rem 1rem;
	}

	tbody tr {
		:nth-of-type(odd) {
			background-color: ${({ theme }) => theme.tableOddRow};
		}
	}

	caption {
		font-size: 0.9em;
		padding: 5px;
		font-weight: bold;
	}
`;

export const AlertButton = styled(Button)`
	margin: 0.5rem;
	margin-left: auto;
	width: min-content;
	background-color: #ff0000;
`;
