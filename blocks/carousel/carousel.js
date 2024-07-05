export default function decorate(block) {
  const [i] = block.children;
  i.className = 'carousel-item';
}
