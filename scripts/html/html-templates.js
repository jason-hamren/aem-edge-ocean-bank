export default function templateBlockMarkup(title, description) {
  return `
    <div class="teaser">
      <div id="teaser-4dd97e852b" class="cmp-teaser">
        <div class="cmp-teaser__content">
          <h2 class="cmp-teaser__title">${title.firstElementChild.outerHTML}</h2>
          <div class="cmp-teaser__description">
            ${description.firstElementChild.outerHTML}
          </div>
          <div class="cmp-teaser__action-container">
            <a class="cmp-teaser__action-link" href="/content/core-components-examples/library/core-content/teaser.html">Call To Action</a>
            <a class="cmp-teaser__action-link" href="/content/core-components-examples/library.html">Call To Action</a>
          </div>
        </div>
        <div class="cmp-teaser__image">
          <img src="" class="cmp-image__image" itemprop="contentUrl" width="850" height="509" alt="Snowy mountain glacier" title="Snowy mountain glacier">
          <meta itemprop="caption" content="Snowy mountain glacier">
        </div>
      </div>
    </div>
    `;
}
