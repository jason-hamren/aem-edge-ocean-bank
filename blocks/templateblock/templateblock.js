import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  [...block.children].forEach((item) => {
    moveInstrumentation(item, wrapper);
    wrapper.append(item);
  });
  block.textContent = '';
  block.append(wrapper);
}
