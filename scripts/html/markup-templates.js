export default function templateBlockMarkup(title, description) {
  return `
    <div class="ofs-flippable-card">
      <div class="ofs-card-side-front">
        <div class="content-title">${title?.firstElementChild.outerHTML}</div>
        <div class="action-container">
          <button class="action"> <span class="action-icon"></span></button>
        </div>
      </div>
      <div class="ofs-card-side-back">
        <div class="content-description">
          ${description?.firstElementChild.outerHTML}
          <a class="action-link" href="https://www.cognitoforms.com/OceanBank2/OceanFinancialServicesContactMe">Let's connect</a>
        </div>
        <div class="action-container">
            <button class="action"><span class="action-icon"></span></button>
        </div>
      </div>
    </div>
    `;
}
