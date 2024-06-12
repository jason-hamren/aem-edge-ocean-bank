export default function decorate(block) {
  const [h, nh] = block.children;
  h.className = 'highlight-section';
  nh.className = 'nohighlight';
}
