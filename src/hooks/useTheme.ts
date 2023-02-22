import { useEffect, useState } from 'react';

const useDarkMode = (): [string, () => void] => {
    const [theme, setTheme] = useState("");

    const setMode = (mode: string): void => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = (): void => {
        if (theme === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        setTheme(localTheme ?? 'light')
    }, []);

    return [theme, themeToggler]
};

export default useDarkMode;