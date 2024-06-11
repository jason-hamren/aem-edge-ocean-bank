export default function decorate(block) {
  const [h, nh] = block.children;
  h.className = 'highlight-section';
  nh.className = 'nohighlight';

  const highlightContainer = block.firstChild();
  const span = document.createElement('span');
  span.className = 'highlighted';
  const highlightHeader = highlightContainer.querySelector('h2');
  const headerText = highlightHeader.innerHTML;
  const headerArray = headerText.split(' ');
  const highlightedText = headerArray.slice(0, 2).join(' ');
  span.innerHTML = highlightedText;
  highlightHeader.innerHTML = ` ${headerArray.slice(2).join(' ')}`;
  highlightHeader.prepend(span);
}
