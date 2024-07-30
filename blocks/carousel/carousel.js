function createCarouselItem(imageContent, cardContent) {
  const imageSrc = imageContent && imageContent.querySelector('img').getAttribute('src');
  const imgAlt = imageContent && imageContent.querySelector('img').getAttribute('alt');
  const cardTitle = cardContent && cardContent.querySelector('p:nth-of-type(1)')?.innerText;
  const cardText = cardContent && cardContent.querySelector('p:nth-of-type(2)')?.innerText;
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

// function createActionContainer() {
//   return `
//     <div class="carousel-actions">
//       <button class="action-prev"></button>
//       <button class="action-next"></button>
//     </div>`;
// }

export default function decorate(block) {
  // add classes
  const carouselContainer = document.createElement('div');
  [...block.children].forEach((carouselItem) => {
    const [imageContent, cardContent] = carouselItem.children;
    // eslint-disable-next-line max-len
    carouselContainer.append(createCarouselItem(imageContent, cardContent));
  });
  block.textContent = '';
  block.innerHTML = carouselContainer.toString();
  // block.insertAdjacentHTML('beforend', createActionContainer());
}
