import styled from 'styled-components';

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	flex: 1 1 auto;
	width: 1%;
	min-width: 0;
	margin-bottom: 0;

	&:focus {
		outline: none;
		border: 1px solid #007bff;
	}
`;

export default Input;
