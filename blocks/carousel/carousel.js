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
  // add classes
  [...block.children].forEach((carouselItem) => {
    // add class to image
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    carouselItem.classList.add('carousel-item');
    wrapAll(carouselItem.querySelector('picture'), imgContainer);
    // add class to content card
    const contentCard = document.createElement('div');
    contentCard.className = 'content-card';
    wrapAll(carouselItem.querySelectorAll("[data-aue-label='Title']"), contentCard);
  });
}
