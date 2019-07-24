import { h, useProvider, useEffect, customElement, useConsumer } from 'atomico';

// Initial state
const initialState = window.INITIAL_THEME || {};
// Channel
export const CHANNEL = Symbol();

// Provider component.
export const ThemeProvider = ({ theme, children }) => {
    const [state, setState] = useProvider(CHANNEL, theme || initialState);

    useEffect(() => {
        if (theme) {
            setState(theme);
        }
    }, [theme])

    return (
        <host shadowDom>
            <slot />
        </host>
    );
};

ThemeProvider.props = {
    theme: Object
}

// Consumer component.
export const ThemeConsumer = ({ renderer }) => {
    const [state] = useConsumer(CHANNEL);
    
    return (
        <host>
            {renderer(state)}
        </host>
    );
};

ThemeConsumer.props = {
    renderer: Function
}

customElement('theme-provider', ThemeProvider);
customElement('theme-consumer', ThemeConsumer);