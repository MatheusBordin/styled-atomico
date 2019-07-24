# styled-atomico
Styled Components for Atomico.js

### Motivations
Use CSS-in-JS in custom components development. Providing theming support for components building with Atomico.

### Installation

You can install using *npm* or *yarn*:

```sh
npm i styled-atomico
```
or
```sh
yarn add styled-atomico
```

### Usage
Very simple, use like as library inside your application builded with Atomico or in your HTML/JS project as custom-component.

```javascript
import { h, customElement } from 'atomico';
import styled from 'styled-atomico';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  width: ${props => props.size};
  height: ${props => props.size};
  padding: ${props => props.theme.boxPad}
`;

const theme = { boxPad: '20px' };
function App() {
  return (
    <theme-provider theme={theme}>
      <Box size="20px" color="black">Testing</Box>
    </theme-provider>
  );
}

customElement('my-app', App);
```

