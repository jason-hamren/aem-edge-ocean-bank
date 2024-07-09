import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  [...block.children].forEach((item) => {
    moveInstrumentation(item, wrapper);
    while (item.firstElementChild) wrapper.append(item.firstElementChild);
  });
  block.append(wrapper);
}
