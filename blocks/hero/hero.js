export default function decorate(block) {
  const [bg] = block.children;

  bg.className = 'bg bg-hero';
}
