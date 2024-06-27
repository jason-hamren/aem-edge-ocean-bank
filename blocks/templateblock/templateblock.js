import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  console.log('templateblock');
  const [col1, col2] = block.children;
  col1.className = 'col1';
  col2.className = 'col2';
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  block.prepend(wrapper);
  [...block.children].forEach((child) => {
    moveInstrumentation(child, wrapper);
    while (child.firstElementChild) wrapper.append(child.firstElementChild);
  });
}
