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
    carouselItem.querySelector('div:nth-child(2)')?.classList.add('content-card');
  });

  const actionContainer = document.createElement('div');
  actionContainer.className = 'carousel-actions';
  const previousAction = document.createElement('button');
  previousAction.className = 'action-prev';
  const nextAction = document.createElement('button');
  nextAction.className = 'action-next';

  actionContainer.append(previousAction);
  actionContainer.append(nextAction);

  block.append(actionContainer);
}
