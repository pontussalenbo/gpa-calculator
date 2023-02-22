/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Button = styled.button`
	color: #fff;
	background-color: ${props => props.color ?? '#007bff'};
	margin-top: 1rem;
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
`;

export const AlertButton = styled(Button)`
	background-color: #ff0000;
`;
