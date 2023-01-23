import { useLayoutEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
export const useTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return { theme, setTheme };
};