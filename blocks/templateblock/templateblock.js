export default function decorate(block) {
  const clonedBlock = [...block.children];
  block.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.innerHTML = `
    <div class="ofs-flippable-card">
      <div class="ofs-card-side-front">
        ${clonedBlock[0].innerHTML}
        <div class="action-container">
          <button class="action"> <span class="action-icon"></span></button>
        </div>
      </div>
      <div class="ofs-card-side-back">
        <div class="content-description">
          ${clonedBlock[1].innerHTML}
          <a class="action-link" href="https://www.cognitoforms.com/OceanBank2/OceanFinancialServicesContactMe">Let's connect</a>
        </div>
        <div class="action-container">
            <button class="action"><span class="action-icon"></span></button>
        </div>
      </div>
    </div>
    `;

  block.append(clonedBlock);
}
