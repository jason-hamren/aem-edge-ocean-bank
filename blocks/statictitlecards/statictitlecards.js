export default function decorate(block) {
  [...block.children].forEach((child) => {
    if (child.firstElementChild) {
      child.classList.add('card');
    } else {
      child.classList.add('card-container');
    }
  });

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
