import React from 'react';


/**
 * Extracts name from component
 * @param  {Object} [component={}] React Component
 * @return {string}                Component name
 */
export const name = (component = {}) => {
    const { displayName, type } = component;
    const found = (displayName || type.displayName || type.name);
    return found ? found.replace(/ /g, '_').toLowerCase() : null;
};

/**
 * Extracts children from component
 * @param  {Array}  [components=[]]      React Component
 * @param  {String} [fallback='default'] Component Name fallback
 * @return {object}                      React children converted from array to object
 */
export const children = (components = [], fallback = 'default') => {
    const extract = {};

    React.Children.forEach(components, (component) => {
        const key = name(component) || fallback;

        if (!extract[key]) {
            extract[key] = [];
        }
        extract[key].push(component);
    });

    return extract;
};
