import { createOptimizedPicture, decorateIcons } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

function addActionButton(li, type) {
  const actionContainer = document.createElement('div');
  actionContainer.classList.add('action-container');
  const actionButton = document.createElement('button');
  actionButton.classList.add('action');
  actionButton.type = 'button';
  const classes = `"icon icon-${type}"`;
  actionButton.innerHTML = `<span class=${classes}></span>`;
  actionButton.addEventListener('click', () => {
    li.classList.toggle('flipped');
    const overlay = document.querySelector('.flipcard-overlay');
    overlay.classList.toggle('fade-out');
    overlay.classList.toggle('fade-in');
  });
  decorateIcons(actionButton, '', 'plus');
  actionContainer.append(actionButton);
  return actionContainer;
}

/**
 * Wrap an array of items all at once
 */
function wrapAll(children, wrapper) {
  if (children && children.length) {
    children[0].parentNode.insertBefore(wrapper, children[0]);
    [...children].forEach((child) => {
      if (child === wrapper) return;
      wrapper.appendChild(child);
    });
  }
}

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const wrapper = document.createElement('div');
    wrapper.className = 'flipcard-content';
    li.append(wrapper);
    li.className = 'flipcard';
    moveInstrumentation(row, wrapper);
    while (row.firstElementChild) wrapper.append(row.firstElementChild);
    const classes = ['remove', 'front', 'remove', 'back'];
    classes.forEach((c, i) => {
      const section = wrapper.children[i];
      const backCardContent = document.createElement('div');
      backCardContent.classList.add('flipcard-back-content');
      if (section && section.hasChildNodes()) {
        section.classList.add(`flipcard-${c}`);
      }
      if (c === 'front') {
        section.append(addActionButton(li, 'plus'));
      }
      if (c === 'back') {
        section.append(addActionButton(li, 'close'));
        wrapAll(section.children, backCardContent);
      }
    });
    ul.append(li);
  });
  // optimize images
  ul.querySelectorAll('p > picture > img').forEach((img) => {
    // if surrounded by <p> tags, remove them
    const wrapperToRemove = img.parentElement.parentElement;
    if (wrapperToRemove.tagName === 'P') {
      wrapperToRemove.replaceWith(img.parentElement);
    }
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // set up overlay on page for flipped state
  const overlay = document.createElement('div');
  overlay.classList.add('flipcard-overlay', 'fade-out');
  overlay.addEventListener('click', () => {
    document.querySelector('.flipcard.flipped').classList.remove('flipped');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  });
  document.querySelector('body').appendChild(overlay);

  block.textContent = '';
  block.append(ul);
}
