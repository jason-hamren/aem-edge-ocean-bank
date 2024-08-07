export default function decorate(block) {
  const [txt, desc] = block.children;

  txt.className = 'text-class';
  desc.className = 'caption';
}
