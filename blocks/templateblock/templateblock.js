export default function decorate(block) {
  console.log('templateblock');
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  block.prepend(wrapper);
  [...block.children].forEach((child) => {
    while (child.firstElementChild) wrapper.append(child.firstElementChild);
  });
}
