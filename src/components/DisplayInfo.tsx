import type { Grade } from 'types/Grade';
import Container from './Container';
import type React from 'react';
import styled from 'styled-components';
import { Grid } from './Grid/Grid';
import { GridItem } from './Grid/GridItem';

interface TextProperties {
	children: React.ReactNode | React.ReactNode[];
}

const Text = styled.p<TextProperties>`
	text-align: left;
	margin: 0.5rem;
`;

const BoldText = styled(Text)`
	text-align: left;
	font-weight: bold;
`;

interface InfoProperties {
	// eslint-disable-next-line react/require-default-props
	credits?: Grade[];
}

const FlexGridItem = styled(GridItem)`
	display: flex;
`;

function DisplayInfo(props: InfoProperties): JSX.Element {
	const { credits } = props;
	return (
		<Container style={{ margin: '3rem 0' }}>
			<Grid>
				<FlexGridItem xs={4}>
					<BoldText>GPA: </BoldText>
					<Text>{credits?.length ?? 'N/A'}</Text>
				</FlexGridItem>
				<FlexGridItem xs={4}>
					<BoldText>Credits: </BoldText>
					<Text>{credits?.length ?? 'N/A'}</Text>
				</FlexGridItem>
			</Grid>
		</Container>
	);
}

export default DisplayInfo;
