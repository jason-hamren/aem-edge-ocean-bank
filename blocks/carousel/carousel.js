function createActionContainer() {
  return `
    <div class="carousel-actions">
      <button class="action-prev"></button>
      <button class="action-next"></button>
    </div>`;
}

// carousel actions click event
function addActionClickEventListeners(block) {
  const carouselActions = block.querySelector('.carousel-actions');
  const prevButton = carouselActions.querySelector('.action-prev');
  const nextButton = carouselActions.querySelector('.action-next');

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    const carouselGroup = e.target.parentElement.previousElementSibling;
    carouselGroup.scrollBy(-carouselGroup.clientWidth, 0);
  });

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    const carouselGroup = e.target.parentElement.previousElementSibling;
    carouselGroup.scrollBy(carouselGroup.clientWidth, 0);
  });
}

export default function decorate(block) {
  // add classes
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-group';
  [...block.children].forEach((carouselItem) => {
    carouselItem.classList.add('carousel-item');
    const [imageContent, cardContent] = carouselItem.children;
    // eslint-disable-next-line max-len
    // carouselContainer.insertAdjacentHTML('beforeend', createCarouselItem(imageContent, cardContent));
    imageContent.classList.add('img-container');
    cardContent.classList.add('content-card');
    if (cardContent && cardContent.children.length) {
      let isFirst = true;
      cardContent.childNodes.forEach((child) => {
        if (isFirst) {
          child.classList.add('content-title');
          isFirst = false;
        } else {
          child.classList.add('content-text');
        }
      });
    }
    carouselContainer.append(carouselItem);
  });
  block.textContent = '';
  block.append(carouselContainer);
  block.insertAdjacentHTML('beforeend', createActionContainer());
  addActionClickEventListeners(block);
}
