export default function decorate(block) {
  const [i, c] = block.children;
  i.className = 'carousel-image';
  c.className = 'card';
}