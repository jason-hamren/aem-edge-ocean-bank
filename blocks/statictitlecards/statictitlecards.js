export default function decorate(block) {
  let isFirst = true;
  [...block.children].forEach((child) => {
    if (isFirst) {
      child.classList.add('card');
      isFirst = false;
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
