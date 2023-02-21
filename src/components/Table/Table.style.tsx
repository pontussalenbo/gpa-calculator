import Container from 'components/Container';
import styled, { useTheme } from 'styled-components';
import { Button } from 'components/Button/Button.style';

const StyledTable = styled.table`
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

interface TableProps<T> {
	data?: GenericData[];
	headers?: string[];
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface GenericData {
	[key: string]: never;
}

const ButtonContainer = styled.div`
	display: flex;
	margin: 0 auto;
	width: 50%;
`;

const AlertButton = styled(Button)`
	margin: 0.5rem;
	margin-left: auto;
	width: min-content;
	background-color: #ff0000;
`;

function TableMarkup<T extends object>({
	data,
	headers
}: TableProps<T>): JSX.Element | null {
	if (!data?.length) {
		return null;
	}
	const titles = headers ?? Object.keys(data[0]);
	return (
		<Container mt='5rem'>
			<StyledTable>
				<thead>
					<tr>
						{titles.map((title, index) => (
							<th key={index}>{title}</th>
						))}
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{titles.map((title, index) => (
								<td key={index}>{item[title]}</td>
							))}
							<td>
								<AlertButton>Remove</AlertButton>
							</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
		</Container>
	);
}

export default TableMarkup;
