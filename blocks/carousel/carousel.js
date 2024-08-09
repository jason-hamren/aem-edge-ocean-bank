/**
 * Wrap an array of items all at once
 */
// function wrapAll(children, wrapper) {
//   if (children && children.length) {
//     children[0].parentNode.insertBefore(wrapper, children[0]);
//     [...children].forEach((child) => {
//       if (child === wrapper) return;
//       wrapper.appendChild(child);
//     });
//   }
// }

// function createCarouselItem(imageContent, cardContent) {
//   imageContent.classList.add('img-container');
//   // const imgAlt = imageContent && imageContent.querySelector('img').getAttribute('alt');
//   // const cardTitle = cardContent && cardContent.querySelector('p').innerText;
//   // const cardText = cardContent && cardContent.querySelectorAll('p')[1]?.innerText;
//   return `
//     <div class="carousel-item">
//        ${imageContent}
//        <div class="content-card">
//           ${cardContent}
//        </div>
//     </div>`;
// }

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
    imageContent.classList.add('img-class');
    cardContent.classList.add('card-content');
    if (cardContent && cardContent.children.length) {
      let isFirst = true;
      cardContent.children.forEach((child) => {
        if (isFirst) {
          child.classList.add('card-title');
          isFirst = false;
        } else {
          child.classList.add('card-text');
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
