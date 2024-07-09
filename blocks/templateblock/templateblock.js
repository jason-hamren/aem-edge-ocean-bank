export default function decorate(block) {
  const [title, description] = [...block.children];
  block.textContent = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.innerHTML = `
    <div class="ofs-flippable-card">
      <div class="ofs-card-side-front">
        ${title.innerHTML}
        <div class="action-container">
          <button class="action"> <span class="action-icon"></span></button>
        </div>
      </div>
      <div class="ofs-card-side-back">
        <div class="content-description">
          ${description.innerHTML}
          <a class="action-link" href="https://www.cognitoforms.com/OceanBank2/OceanFinancialServicesContactMe">Let's connect</a>
        </div>
        <div class="action-container">
            <button class="action"><span class="action-icon"></span></button>
        </div>
      </div>
    </div>
    `;

  block.append(wrapper);
}
