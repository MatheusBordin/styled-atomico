import { h } from 'atomico';
import { generateComponentID } from './generate-id'; 
import { parseInterpolation } from './parse-interpolation';
import stylis from '../vendor/stylis';

export const makeElement = (Tag) => (strings, ...interpolations) => {
    const componentID = generateComponentID();

    return (props) => ( 
        <theme-consumer renderer={(theme) => (
            <Tag {...props} class={componentID}>
                <style>{
                    stylis(
                        `.${componentID}`, 
                        strings.reduce(
                            (acc, curr, idx) => acc + curr + parseInterpolation(interpolations, idx, {...props, theme: theme}),
                            ''
                        )
                    )
                }</style>
                {props.children}
            </Tag>
        )} />
    );
}

export const makeStyleElement = (strings, ...interpolations) => {
    return (props) => ( 
        <theme-consumer renderer={(theme) => (
            <style>
                {
                    stylis(
                        `:host`, 
                        strings.reduce(
                            (acc, curr, idx) => acc + curr + parseInterpolation(interpolations, idx, {...props, theme: theme}),
                            ''
                        )
                    )
                }
            </style>
        )} />
    );
}