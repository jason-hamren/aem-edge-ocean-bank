export default function decorate(block) {
  const [col1, col2] = block.children;
  col1.className = 'col1';
  col2.className = 'col2';
}
