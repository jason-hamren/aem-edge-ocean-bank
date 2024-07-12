import templateBlockMarkup from '../../scripts/html/html-templates.js';

export default function decorate(block) {
  const [title, description, cta] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.innerHTML = templateBlockMarkup(title, description, cta);
  // explain all the things
  block.textContent = '';
  block.append(wrapper);
}
