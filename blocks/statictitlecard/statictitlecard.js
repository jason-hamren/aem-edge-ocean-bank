export default function decorate(block) {
  const [card] = block.children;
  card.className = 'card';
}
