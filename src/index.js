import React from 'react';


export default function Extract({
    key = 'extracted',
    fallbackName = 'default',
} = {}) {
    return (Component) => {
        return class Extraction extends React.Component {
            getName({ displayName, type }) {
                return (displayName || type.displayName || type.name || fallbackName)
                    .replace(/ /g, '_').toLowerCase();
            }
            parseChildren() {
                const extract = {};
                React.Children.forEach(this.props.children, (child) => {
                    const name = this.getName(child);

                    if (name) {
                        if (!extract[name]) {
                            extract[name] = [];
                        }
                        extract[name].push(child);
                    } else {
                        console.error('No name given for child');
                    }
                });
                return { [key]: extract };
            }
            render() {
                return (<Component {...this.props} {...this.parseChildren()} />);
            }
        };
    };
}
