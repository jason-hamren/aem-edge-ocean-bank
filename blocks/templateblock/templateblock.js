import templateBlockMarkup from '../../scripts/html/markup-templates.js';

export default function decorate(block) {
  const [title, description] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.innerHTML = templateBlockMarkup(title, description);
  block.textContent = '';
  block.append(wrapper);
}
