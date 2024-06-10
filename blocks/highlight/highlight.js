export default function decorate(block) {
  const [h, nh] = block.children;
  h.className = 'highlighted';
  nh.className = 'nohighlight';
}
