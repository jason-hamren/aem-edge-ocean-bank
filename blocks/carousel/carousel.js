function createCarouselItem(img, imgAlt, title, text) {
  return `
    <div class="carousel-item">
       <div class="img-container">
          <picture>
            <img src="${img}" alt="${imgAlt}">
          </picture>
       </div>
       <div class="content-card">
          <h2 class="content-title">${title}</h2>
          <div class="content-text">
            <p>${text}</p>
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

export default function decorate(block) {
  // add classes
  const carouselContainer = document.createElement('div');
  [...block.children].forEach((carouselItem) => {
    const [image, imageAlt, cardTitle, cardText] = carouselItem.children;
    // eslint-disable-next-line max-len
    carouselContainer.append(createCarouselItem(image, imageAlt, cardTitle, cardText));
  });

  block.append(carouselContainer);
  block.append(createActionContainer());
}
