/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Grade } from '../types/Grade';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Select from './Select/Select';
import Option from './Select/Option';
import Container from './Container';
import Row from './Flex/Row.style';
import Col from './Flex/Col.style';

import { FormGroup, Label, Input, Message } from './Form/Form.style';
import { Button } from './Button/Button.style';
import styled from 'styled-components';

const EvenSpaceRow = styled(Row)`
	justify-content: space-between;
`;

interface Errors {
	grade?: string;
	course?: string;
	credits?: string;
}

const INIT_STATE = {
	grade: '',
	course: '',
	credits: 0
};

const GRADES = ['U', 'G', '3', '4', '5'];

type OnChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
	addGrade: (grade: Grade) => void;
}

function GradeInput(props: Props): JSX.Element {
	const { addGrade } = props;

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const [state, setState] = React.useState<Grade>(INIT_STATE);
	const [savedGrades, setSavedGrades] = useLocalStorage<Grade[]>('grades', []);
	const [errors, setErrors] = React.useState<Errors>({});

	const validateGrade = (nState: Grade): boolean => {
		const { course, credits, grade } = nState;
		let isValid = true;

		const formErrors = {
			grade: '',
			course: '',
			credits: ''
		};

		if (course === '' && course.length < 3) {
			formErrors.course = 'Should have min. length of 3';
			isValid = false;
		}
		if (credits <= 0) {
			formErrors.credits = 'Should be greater than 0';
			isValid = false;
		}

		if (!GRADES.includes(grade)) {
			formErrors.grade = 'Should be one of U, G, 3, 4, 5';
			isValid = false;
		}

		setErrors(() => formErrors);
		return isValid;
	};

	const onHandleChange = (event: OnChangeEvent): void => {
		const validate = {
			...state,
			[event.target.name]: event.target.value
		};

		validateGrade(validate);

		setState(previous => ({
			...previous,
			[event.target.name]: event.target.value
		}));
	};

	const onClickAdd = (): void => {
		if (!validateGrade(state)) {
			return;
		}
		addGrade(state);
		setSavedGrades([...savedGrades, state]);
	};
	return (
		<Container>
			<EvenSpaceRow id='hello'>
				<Col xs={6} sm={3}>
					<FormGroup>
						<Label htmlFor='course'>Course Name</Label>
						<Input
							id='course'
							name='course'
							placeholder='Course Name'
							value={state.course}
							onChange={onHandleChange}
							required
						/>
						{errors.credits ? <Message>{errors.course} </Message> : null}
					</FormGroup>
				</Col>
				<Col xs={6} sm={3}>
					<FormGroup>
						<Label htmlFor='credits'>Credits</Label>
						<Input
							id='credits'
							name='credits'
							placeholder='Credits'
							type='number'
							step={0.5}
							value={state.credits}
							onChange={onHandleChange}
							required
						/>
						{errors.credits ? <Message>{errors.credits} </Message> : null}
					</FormGroup>
				</Col>
				<Col xs={6} sm={3}>
					<FormGroup>
						<Label htmlFor='grade'>Grade</Label>
						<Select
							name='grade'
							placeholder='Grade'
							value={state.grade}
							onChange={onHandleChange}
						>
							<Option value=''>Select Grade</Option>
							{GRADES.map(grade => (
								<Option key={grade} value={grade}>
									{grade}
								</Option>
							))}
						</Select>
						{errors.credits ? <Message>{errors.grade} </Message> : null}
					</FormGroup>
				</Col>
				<Col xs={6} sm={3} md={2}>
					<FormGroup style={{ marginTop: '0.5rem' }}>
						<Button onClick={onClickAdd}>Add Grade</Button>
					</FormGroup>
				</Col>
			</EvenSpaceRow>
		</Container>
	);
}

export default GradeInput;
