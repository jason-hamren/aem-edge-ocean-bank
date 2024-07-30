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
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  let isFirst = true;
  [...block.children].forEach((child) => {
    if (isFirst) {
      child.classList.add('card');
      isFirst = false;
    } else {
      child.classList.add('statictitlecard');
    }
  });

  wrapAll(block.querySelectorAll('.statictitlecard'), cardContainer);
  const staticcards = document.querySelector('.statictitlecards');
  if (staticcards != null) {
    const staticcardsTop = staticcards.offsetTop + 50;
    window.addEventListener(
      'scroll',
      () => (
        document.documentElement.scrollTop >= staticcardsTop ? staticcards.classList.add('hide-mask') : staticcards.classList.remove('hide-mask')),
    );
  }
}
