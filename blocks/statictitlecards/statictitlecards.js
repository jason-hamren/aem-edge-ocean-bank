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
  const [card] = block.children;
  card.className = 'card';
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  wrapAll(block.querySelectorAll("[data-aue-label='Statictitlecard']"), cardContainer);
}

const staticcards = document.querySelector('.statictitlecards');
if (staticcards != null) {
  window.addEventListener('scroll', () => {
    document.documentElement.scrollTop >= 3000 ? staticcards.classList.add('hide-mask') : staticcards.classList.remove('hide-mask');
  });
}
