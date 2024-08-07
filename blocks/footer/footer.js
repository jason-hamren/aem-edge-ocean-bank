import { createOptimizedPicture, getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

function wrapImgsInLinks(container) {
  const pictures = container.querySelectorAll('picture');
  pictures.forEach((pic) => {
    const link = pic.parentElement.nextElementSibling.querySelector('a');
    const linkWrapper = link.parentElement;
    if (link && link.tagName === 'A' && link.href) {
      link.innerHTML = pic.outerHTML;
      pic.replaceWith(link);
      linkWrapper.remove();
    }
  });
}
/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  const classes = ['footer-logo', 'footer-info', 'footer-legal'];
  classes.forEach((c, i) => {
    const section = footer.children[i];
    if (section) section.classList.add(c);
  });
  const footerLegalLogo = footer.querySelector('.footer-legal');
  footer.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  wrapImgsInLinks(footerLegalLogo);

  const footerInfo = footer.querySelector('.footer-info');
  const footerOfficeInfo = document.createElement('div');
  footerOfficeInfo?.classList.add('footer-office-info');
  const footerInfoOfficeInfo = footerInfo.querySelectorAll('p');
  const footerInfoOfficeEmailGroup = document.createElement('div');
  footerInfoOfficeEmailGroup.classList.add('footer-office-info-email-group');
  footerInfoOfficeInfo.forEach((p, idx) => {
    footerOfficeInfo.append(p);
    if (idx > 0) {
      footerInfoOfficeEmailGroup.append(p);
    }
  });
  footerOfficeInfo.append(footerInfoOfficeEmailGroup);
  footerInfo.append(footerOfficeInfo);
  block.append(footer);
}
