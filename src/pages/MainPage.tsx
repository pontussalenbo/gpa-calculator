import { useEffect, useState } from 'react';
import Container from 'components/Container';
import DisplayInfo from 'components/DisplayInfo';
import GradeInput from 'components/GradeInput';
import type { Grade } from 'types/Grade';
import useLocalStorage from 'hooks/useLocalStorage';
import TableMarkup from 'components/Table/Table.style';

function MainPage(): JSX.Element {
	const [grades, _] = useLocalStorage<Grade[]>('grades', []);
	const [data, setData] = useState<Grade[]>(grades);

	useEffect(() => {
		const updater = (e: CustomEvent<Grade[]>): void => {
			console.log(e);
			setData(_ => [...e.detail]);
		};
		window.addEventListener('local-storage', updater);
		return () => window.removeEventListener('local-storage', updater);
	}, []);

	return (
		<Container>
			<h1>Grade Calculator</h1>
			<DisplayInfo />
			<GradeInput />
			<Container width='85%'>
				<TableMarkup<Grade[]>
					headers={['course', 'credits', 'grade']}
					data={data}
				/>
			</Container>
		</Container>
	);
}

export default MainPage;
