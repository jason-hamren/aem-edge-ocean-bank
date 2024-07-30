function createCarouselItem(imageContent, cardContent) {
  const imageSrc = imageContent && imageContent.querySelector('img').getAttribute('src');
  const imgAlt = imageContent && imageContent.querySelector('img').getAttribute('alt');
  const cardTitle = cardContent && cardContent.querySelector('p').innerText;
  const cardText = cardContent && cardContent.querySelectorAll('p')[1]?.innerText;
  return `
    <div class="carousel-item">
       <div class="img-container">
          <picture>
            <img src="${imageSrc || ''}" alt="${imgAlt || ''}">
          </picture>
       </div>
       <div class="content-card">
          <h2 class="content-title">${cardTitle || ''}</h2>
          <div class="content-text">
            <p>${cardText || ''}</p>
          </div>
       </div>
    </div>`;
}

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
  const blockWidth = block.clientWidth;

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    block.scrollBy(-blockWidth, 0);
  });

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    block.scrollBy(blockWidth, 0);
  });
}

export default function decorate(block) {
  // add classes
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-group';
  [...block.children].forEach((carouselItem) => {
    const [imageContent, cardContent] = carouselItem.children;
    // eslint-disable-next-line max-len
    carouselContainer.insertAdjacentHTML('beforeend', createCarouselItem(imageContent, cardContent));
  });
  block.textContent = '';
  block.append(carouselContainer);
  block.insertAdjacentHTML('beforeend', createActionContainer());
  addActionClickEventListeners(block);
}
