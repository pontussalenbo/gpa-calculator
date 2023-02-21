import { ToggleContainer, ThemeIcon } from './ThemeToggler.style';

interface ToggleArgs {
	theme: string;
	onToggleTheme: () => void;
}

function Toggle({ theme, onToggleTheme }: ToggleArgs): JSX.Element {
	const isLight = theme === 'light';

	return (
		<ToggleContainer lightTheme={isLight} onClick={onToggleTheme}>
			<ThemeIcon aria-label='Light mode' role='img'>
				🌞
			</ThemeIcon>
			<ThemeIcon aria-label='Dark mode' role='img'>
				🌜
			</ThemeIcon>
		</ToggleContainer>
	);
}

export default Toggle;
