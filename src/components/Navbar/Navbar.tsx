import Container from 'components/Container';
import Toggle from 'components/ThemeToggler/ThemeToggler';
import { Bar, MainNav } from './Navbar.style';

interface NavbarProps {
	theme: string;
	onToggleTheme: () => void;
}

function Navbar(props: NavbarProps): JSX.Element {
	const { theme, onToggleTheme } = props;

	return (
		<Container>
			<Bar>
				<MainNav>
					{theme ? (
						<Toggle theme={theme} onToggleTheme={onToggleTheme} />
					) : null}
				</MainNav>
			</Bar>
		</Container>
	);
}

export default Navbar;
