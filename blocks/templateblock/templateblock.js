export default function decorate(block) {
  const [title, description] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.innerHTML = `
    <div class="ofs-flippable-card">
      <div class="ofs-card-side-front">
        <div class="content-title"></div>
        <div class="action-container">
          <button class="action"> <span class="action-icon"></span></button>
        </div>
      </div>
      <div class="ofs-card-side-back">
        <div class="content-description">
          <a class="action-link" href="https://www.cognitoforms.com/OceanBank2/OceanFinancialServicesContactMe">Let's connect</a>
        </div>
        <div class="action-container">
            <button class="action"><span class="action-icon"></span></button>
        </div>
      </div>
    </div>
    `;
  block.textContent = '';
  const titleLocation = wrapper.querySelector('.content-title');
  const contentDescription = wrapper.querySelector('.content-description');
  titleLocation.append(title?.firstElementChild.outerHTML);
  contentDescription.append(description?.firstElementChild.outerHTML);
  block.append(wrapper);
}
