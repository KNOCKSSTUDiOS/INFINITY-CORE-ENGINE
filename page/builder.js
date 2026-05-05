page/builder.js 
class PageBuilder {
  constructor(config = {}) {
    this.pages = [];
    this.currentPage = null;
    this.monetization = config.monetization || null;
    this.animations = config.animations || null;
    this.sound = config.sound || null;
    this.cloudRunConfig = config.cloudRun || {};
  }

  createPage(name, template = 'blank') {
    const page = {
      id: Math.random().toString(36),
      name,
      template,
      sections: [],
      monetizationRules: [],
      animations: [],
      sounds: [],
      createdAt: new Date(),
      deployed: false,
      earnings: 0
    };
    this.pages.push(page);
    return page;
  }

  addSection(pageId, type, content = {}) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return null;

    const section = {
      id: Math.random().toString(36),
      type,
      content,
      monetized: false,
      trackingCode: null
    };
    page.sections.push(section);
    return section;
  }

  addMonetizationRule(pageId, rule) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return null;

    page.monetizationRules.push({
      id: Math.random().toString(36),
      type: rule.type, // 'ad', 'subscription', 'affiliate', 'nft'
      target: rule.target,
      config: rule.config
    });
  }

  addAnimation(pageId, sectionId, animation) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return null;

    page.animations.push({
      sectionId,
      ...animation
    });
  }

  addSound(pageId, soundConfig) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return null;

    page.sounds.push({
      id: Math.random().toString(36),
      ...soundConfig
    });
  }

  generateHTML(pageId) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return '';

    let html = `<!DOCTYPE html>
<html>
<head>
    <title>${page.name}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background: #000; color: #fff; font-family: 'Inter', sans-serif; }
        .cinema-card { border: 1px solid rgba(0, 255, 255, 0.2); background: rgba(0, 255, 255, 0.05); padding: 24px; border-radius: 8px; margin: 16px 0; }
    </style>
</head>
<body>
    <div class="max-w-7xl mx-auto p-6">
        <h1 class="text-5xl font-black mb-8" style="text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);">${page.name}</h1>
`;

    page.sections.forEach(section => {
      html += `<section class="cinema-card">${JSON.stringify(section.content)}</section>`;
    });

    html += `
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                console.log('Page loaded and monetized');
                console.log('Monetization rules:', ${JSON.stringify(page.monetizationRules)});
            });
        </script>
    </body>
</html>`;

    return html;
  }

  async deployToCloudRun(pageId, { endpoint, token } = {}) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return { success: false, error: 'Page not found' };
    if (!endpoint) return { success: false, error: 'Cloud Run endpoint not configured' };

    const html = this.generateHTML(pageId);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: page.name.toLowerCase().replace(/\s/g, '-'),
          files: [{ file: 'index.html', data: html }]
        })
      });

      if (response.ok) {
        page.deployed = true;
        const deployment = await response.json();
        return { success: true, url: deployment.url, pageId };
      }
      return { success: false, error: `Cloud Run deploy returned ${response.status}` };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  getPageStats(pageId) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return null;

    return {
      pageId,
      pageName: page.name,
      deployed: page.deployed,
      earnings: page.earnings,
      sections: page.sections.length,
      monetizationRules: page.monetizationRules.length,
      animations: page.animations.length
    };
  }

  exportAllPages() {
    return JSON.stringify(this.pages, null, 2);
  }
}

export default PageBuilder;
