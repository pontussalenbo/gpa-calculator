import styled from 'styled-components';

const Select = styled.select`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	margin-bottom: 0.5rem;
	border-radius: 4px;
	font-size: 16px;
	&:focus {
		outline: none;
		border: 1px solid #007bff;
	}
`;

export default Select;
