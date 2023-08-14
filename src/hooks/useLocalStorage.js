import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}