import {
  div, h3, p, a,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  // const [title, description] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  const elem = div(
    { class: 'card' },
    a(
      { href: '#' },
      div(
        { class: 'card-thumb' },
      ),
      div(
        { class: 'card-caption' },
        h3('title'),
        p({ class: 'card-description' }, 'description'),
        p(
          { class: 'button-container' },
          a({ href: '#', 'aria-label': 'Read More', class: 'button primary' }, 'Read More'),
        ),
      ),
    ),
  );
  wrapper.append(elem);
  block.prepend(wrapper);
}
