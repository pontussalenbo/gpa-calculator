import Container from 'components/Container';
import DisplayInfo from 'components/DisplayInfo';
import GradeInput from 'components/GradeInput';
import TableMarkup from 'components/Table/Table';
import useLocalStorage from 'hooks/useLocalStorage';
import { useState } from 'react';
import type { Grade } from 'types/Grade';

function MainPage(): JSX.Element {
	const [grades, setSavedGrades] = useLocalStorage<Grade[]>('grades', []);
	const [data, setData] = useState<Grade[]>(grades);

	const addGrade = (grade: Grade): void => {
		setData(prev => [...prev, grade]);
	};

	const onRemoveGrade = (grade: Grade): void => {
		setData(prev => prev.filter(g => g.course !== grade.course));
		setSavedGrades(prev => prev.filter(g => g.course !== grade.course));
	};

	return (
		<Container>
			<h1>Grade Calculator</h1>
			<DisplayInfo grades={data} />
			<GradeInput addGrade={addGrade} />
			<Container width='85%'>
				<TableMarkup<GenericObject<Grade>>
					headers={['course', 'credits', 'grade']}
					data={data}
					onRemoveGrade={onRemoveGrade}
				/>
			</Container>
		</Container>
	);
}

export default MainPage;
