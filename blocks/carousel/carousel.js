/**
 * Wrap an array of items all at once
 */
function addParentClass(child, className) {
  if (child) {
    child.parentNode.classList.add(className);
  }
}

export default function decorate(block) {
  // add classes
  [...block.children].forEach((carouselItem) => {
    // add class to image
    carouselItem.classList.add('carousel-item');
    addParentClass(carouselItem.querySelector('picture'), 'img-container');
    // add class to content card
    addParentClass(carouselItem.querySelector("[data-aue-label='Title']"), 'content-card');
  });
}
