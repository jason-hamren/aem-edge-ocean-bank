export default function decorate(block) {
  const [h, nh] = block.children;
  h.className = 'highlight-section';
  nh.className = 'nohighlight';

  const highlightContainer = block.firstElementChild;
  const span = document.createElement('span');
  span.className = 'highlighted';
  const highlightHeader = highlightContainer.querySelector('h2');
  if (highlightHeader) {
    const headerText = highlightHeader.innerHTML;
    const headerArray = headerText.split(' ');
    span.innerHTML = headerArray.slice(0, 2).join(' ');
    highlightHeader.innerHTML = ` ${headerArray.slice(2).join(' ')}`;
    highlightHeader.prepend(span);
  }
}
