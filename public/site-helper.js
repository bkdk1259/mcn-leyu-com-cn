const SiteHelperConfig = {
  url: "https://mcn-leyu.com.cn",
  keywords: ["乐鱼体育", "综合体育", "电竞竞猜"],
  hintText: "点击下方卡片查看详情",
  badgeColor: "#2563eb",
  cardBg: "#ffffff"
};

const siteHelper = {
  config: SiteHelperConfig,
  container: null,

  init() {
    this.createContainer();
    this.renderTitleCard();
    this.renderKeywordBadges();
    this.renderAccessGuide();
  },

  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'site-helper-root';
    Object.assign(this.container.style, {
      maxWidth: '720px',
      margin: '2rem auto',
      padding: '1.5rem',
      fontFamily: 'system-ui, sans-serif',
      lineHeight: 1.6
    });
    document.body.appendChild(this.container);
  },

  renderTitleCard() {
    const card = document.createElement('div');
    card.style.cssText = `
      background: ${this.config.cardBg};
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      margin-bottom: 1.5rem;
    `;

    const title = document.createElement('h2');
    title.textContent = this.config.keywords[0] + '平台';
    title.style.cssText = 'margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.5rem;';

    const desc = document.createElement('p');
    desc.textContent = this.config.hintText;
    desc.style.cssText = 'margin: 0; color: #64748b;';

    const link = document.createElement('a');
    link.href = this.config.url;
    link.textContent = '前往 ' + this.config.url;
    link.target = '_blank';
    link.style.cssText = 'display: inline-block; margin-top: 1rem; color: #2563eb; text-decoration: none; font-weight: 500;';

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    this.container.appendChild(card);
  },

  renderKeywordBadges() {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;';

    this.config.keywords.forEach(keyword => {
      const badge = document.createElement('span');
      badge.textContent = keyword;
      Object.assign(badge.style, {
        display: 'inline-block',
        padding: '0.35rem 0.9rem',
        borderRadius: '999px',
        backgroundColor: this.config.badgeColor,
        color: '#ffffff',
        fontSize: '0.875rem',
        fontWeight: '500',
        letterSpacing: '0.025em'
      });
      wrapper.appendChild(badge);
    });

    this.container.appendChild(wrapper);
  },

  renderAccessGuide() {
    const guide = document.createElement('div');
    guide.style.cssText = `
      background: #f8fafc;
      border-radius: 12px;
      padding: 1.25rem;
      border-left: 4px solid #2563eb;
    `;

    const heading = document.createElement('h3');
    heading.textContent = '使用说明';
    heading.style.cssText = 'margin: 0 0 0.5rem 0; color: #334155; font-size: 1.1rem;';

    const steps = document.createElement('ol');
    steps.style.cssText = 'margin: 0; padding-left: 1.25rem; color: #475569;';

    const items = [
      '点击上方链接进入 ' + this.config.url,
      '在平台内搜索“乐鱼体育”获取最新活动',
      '根据指引完成注册或登录',
      '享受体育赛事与电竞竞猜服务'
    ];

    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.style.marginBottom = '0.3rem';
      steps.appendChild(li);
    });

    guide.appendChild(heading);
    guide.appendChild(steps);
    this.container.appendChild(guide);
  }
};

document.addEventListener('DOMContentLoaded', () => siteHelper.init());