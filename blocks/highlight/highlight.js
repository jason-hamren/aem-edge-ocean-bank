export default function decorate(block) {
  const [bg] = block.children;

  bg.className = 'highlight';
}
