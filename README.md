# react-extract
React Property Extraction

A React higher-order component to get children from within a component and extract each child a named key and passing them along to the given component


## Why?
When passing children into a component, it is difficult to determine exactly what each child is without looping over them.  Sometimes we don't want to render each child one after each other, this libraries provides the extractions of children so each child can be manipulated to provide any necessary content around a specific child within a component.


## Installation

npm:
```bash
npm install react-extract
```

yarn:
```bash
yarn add react-extract
```
## Example

```javascript

import Component from './component';

<Component>
    <Heading>Title</Heading>
    <Body>Title</Body>
<Component>
```

```javascript

import React from 'react';
import Extract from 'react-extract';


class Component extends React.Component {
    render() (
        <div>
            <div>
                { this.props.extract.heading }
                <button>collapse</button>
            </div>
            { this.props.extract.body }
        </div>
    )
}

export default Extract()(Component)
```

## API
#### Extract([options])(Component)

Clones a react component and adds a property object to the component. Options should be passed in as an object

##### Parameters
| Option | type | descriptions |
| -------|------|------------- |
| `key`  | string | Control the name of the prop passed to the component (defaults to `extract`)|
| `fallbackName`  | string | Control name given to the components that a name can not be generated from component (defaults to `default`)|
