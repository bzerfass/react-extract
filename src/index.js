import React from 'react';
import * as Parse from './parse';

export default function Extract({
    key = 'extracted',
    fallbackName = 'default',
} = {}) {
    return (Component) => {
        if (!React.isValidElement(<Component />)) {
            return console.error('A valid React Componenet not found'); // eslint-disable-line no-console
        }

        return (props) => React.cloneElement(<Component />, Object.assign({}, props, {
            [key]: Parse.children(props.children, fallbackName),
        }));
    };
}
