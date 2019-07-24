import { elements } from '../utils/dom-elements';
import { makeElement, makeStyleElement } from './make-element';

const styled = {};

// Create styled for all html elements.
for (const el of elements) {
    styled[el] = makeElement(el);
}

// Create styled for style tag.
styled['style'] = makeStyleElement;

export default styled;