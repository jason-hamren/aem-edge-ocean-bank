import sampleComponentMarkup from '../../scripts/html/html-templates.js';

export default function decorate(block) {
  const [title, description, image] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'samplecomponent-wrapper-custom';
  wrapper.innerHTML = sampleComponentMarkup(title, description, image);
  // explain all the things
  block.textContent = '';
  block.append(wrapper);
}

