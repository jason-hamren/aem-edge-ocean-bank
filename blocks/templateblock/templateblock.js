export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  [...block.children].forEach((item) => {
    const thing = document.createElement('div');
    thing.append(item);
    wrapper.append(thing);
  });
  block.textContent = '';
  block.append(wrapper);
}
