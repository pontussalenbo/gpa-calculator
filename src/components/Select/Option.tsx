import styled from 'styled-components';

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

export default Option;
