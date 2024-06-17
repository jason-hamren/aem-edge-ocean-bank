export default function decorate(block) {
  const [bg, txt] = block.children;

  bg.className = 'bg bg-hero';
  txt.className = 'caption';
}
