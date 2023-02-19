/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Grade } from '../@types/Grade';
import React from 'react';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import { Grid } from './Grid/Grid';
import { GridItem } from './Grid/GridItem';

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 1px solid #007bff;
	}
`;

const Select = styled.select`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 1px solid #007bff;
	}
`;

const Option = styled.option`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 1px solid #007bff;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
`;

const Label = styled.label`
	display: block;
`;

const LabelText = styled.span`
	color: #fff;
	text-align: left;
	margin: 0.5rem;
`;

const ErrorMsg = styled.span`
	display: inline-block;
	color: red;
	text-align: left;
	margin: 0.5rem;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
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

function GradeInput(): JSX.Element {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const [state, setState] = React.useState<Grade>(INIT_STATE);
	const [savedGrades, setSavedGrades] = useLocalStorage<Grade[]>('grades', []);
	const [errors, setErrors] = React.useState<Errors>({});

	const validateGrade = (nState: Grade): boolean => {
		const { course, credits, grade } = nState;
		let isValid = true;

		const errors = {
			grade: '',
			course: '',
			credits: ''
		};

		if (course === '' && course.length < 3) {
			errors.course = 'Should have min. length of 3';
			isValid = false;
		}
		if (credits <= 0) {
			errors.credits = 'Should be greater than 0';
			isValid = false;
		}

		console.log(GRADES.includes(grade));
		if (!GRADES.includes(grade)) {
			errors.grade = 'Should be one of U, G, 3, 4, 5';
			isValid = false;
		}

		setErrors(() => errors);
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
		setSavedGrades([...savedGrades, state]);
	};

	return (
		<Grid justifyContent='center' gap='1rem'>
			<GridItem xs={6} sm={3}>
				<Label>
					<LabelText>Course Name</LabelText>
					<Input
						name='course'
						placeholder='Course Name'
						value={state.course}
						onChange={onHandleChange}
						required
					/>
				</Label>
				{errors.course ? <ErrorMsg>{errors.course}</ErrorMsg> : undefined}
			</GridItem>
			<GridItem xs={6} sm={2}>
				<Label>
					<LabelText>Credits</LabelText>
					<Input
						name='credits'
						placeholder='Credits'
						type='number'
						value={state.credits}
						onChange={onHandleChange}
						required
					/>
					{errors.credits ? <ErrorMsg>{errors.credits}</ErrorMsg> : undefined}
				</Label>
			</GridItem>
			<GridItem xs={6} sm={2}>
				<Label>
					<LabelText>Grade</LabelText>

					<Select
						name='grade'
						placeholder='Grade'
						value={state.grade}
						onChange={onHandleChange}
					>
						{GRADES.map(grade => (
							<Option key={grade} value={grade}>
								{grade}
							</Option>
						))}
					</Select>
					{errors.grade ? <ErrorMsg>{errors.grade}</ErrorMsg> : undefined}
				</Label>
			</GridItem>
			<GridItem style={{ marginTop: '1.5rem' }} xs={6} sm={3}>
				<Button onClick={onClickAdd}>Add Grade</Button>
			</GridItem>
		</Grid>
	);
}

export default GradeInput;
