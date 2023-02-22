import { AlertButton } from 'components/Button/Button.style';
import Container from 'components/Container';
import { StyledTable } from './Table.style';

interface TableProps<T> {
	data?: T[];
	headers?: string[];
	onRemoveGrade: (grade: T) => void;
}

function TableMarkup<T extends Record<string, unknown>>({
	data,
	headers,
	onRemoveGrade
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
						{titles.map(title => (
							<th key={title}>{title}</th>
						))}
						<th>-</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={item[index] as string}>
							{titles.map(title => (
								<td key={item[title] as string}>{item[title] as string}</td>
							))}
							<td>
								<AlertButton onClick={(): void => onRemoveGrade(item)}>
									Remove
								</AlertButton>
							</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
		</Container>
	);
}

export default TableMarkup;
