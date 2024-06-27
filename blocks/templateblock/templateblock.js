export default function decorate(block) {
  const [title, description] = block.children;
  const wrapper = document.createElement('div');
  wrapper.className = 'templateblock-wrapper-custom';
  wrapper.append(...block.children);
  console.log('This is running');

  const baseHtml = `<div class="ofs-flippable-card">
                      <div class="ofs-card-side-front">
                       <h2 class="content-title">${title}</h2>
                       <div class="action-container">
                        <button class="action"> <span class="action-icon"></span></button>
                       </div>
                      </div>   
                      <div class="ofs-card-side-back">
                       <div class="content-description">
                        <h2 class="content-title">${title}</h2>
                        <p class="content-info">${description}</p>
                        <a class="action-link" href="https://www.cognitoforms.com/OceanBank2/OceanFinancialServicesContactMe">Let's connect</a>    
                       </div>
                       <div class="action-container">
                        <button class="action"><span class="action-icon"></span></button>
                       </div>
                      </div>   
                     </div>`;

  wrapper.append(baseHtml);
}
