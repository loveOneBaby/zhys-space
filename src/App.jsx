import { useMemo, useState } from 'react';
import GhostCursor from './components/GhostCursor.jsx';
import { caseMotionPrompts, heroMotionPrompt } from './data/videoPrompts.js';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const navItems = [
  { href: '#role', label: '角色介绍' },
  { href: '#works', label: '作品案例' },
  { href: '#experience', label: '互动体验' },
  { href: '#contact', label: '联系方式' }
];

const workItems = [
  {
    type: '视频',
    title: 'AI Atelier Opening Film',
    eyebrow: 'Hero / Campaign Film',
    description: '以静态 PNG 占位未来首屏视频。画面方向为暖橙光、透明玻璃层、慢速推镜与轻量 UI 粒子。',
    src: publicAsset('assets/case-video-placeholder.png'),
    srcSm: publicAsset('assets/case-video-placeholder-sm.png'),
    alt: 'AI 设计师作品集视频占位图，暖橙色光线与玻璃面板。',
    prompt: caseMotionPrompts[0].prompt
  },
  {
    type: '海报',
    title: 'Dream Synthesis',
    eyebrow: 'AI Poster / Visual Direction',
    description: '梦幻但克制的 AI 视觉方向，强调温度、留白、玻璃质感与品牌化海报系统。',
    src: publicAsset('assets/poster-dream-synthesis.png'),
    srcSm: publicAsset('assets/poster-dream-synthesis-sm.png'),
    alt: 'Dream Synthesis 暖色玻璃拟态 AI 海报占位图。',
    prompt: 'Warm glassmorphism AI poster, orange and pale yellow gradient, translucent panels, elegant white space, premium AI designer portfolio, restrained futuristic mood.'
  },
  {
    type: '海报',
    title: 'Glass System',
    eyebrow: 'Interface / Brand Layer',
    description: '将半透明玻璃材质作为视觉系统核心，用于承载提示词、案例信息和交互卡片。',
    src: publicAsset('assets/poster-glass-system.png'),
    srcSm: publicAsset('assets/poster-glass-system-sm.png'),
    alt: 'Glass System 透明玻璃材质海报占位图。',
    prompt: 'Minimal translucent glass interface poster, white studio background, warm yellow glow, orange accents, premium creative agency style, future UI system.'
  },
  {
    type: '海报',
    title: 'Orange Signal',
    eyebrow: 'Generative Poster / Emotion Tech',
    description: '橙色信号作为情绪科技的视觉母题，适合后续替换为正式作品海报与生成式视觉。',
    src: publicAsset('assets/poster-orange-signal.png'),
    srcSm: publicAsset('assets/poster-orange-signal-sm.png'),
    alt: 'Orange Signal 橙色科技感生成海报占位图。',
    prompt: 'Orange signal generative poster, warm technology, soft luminous glass objects, clean typography zones, dreamlike studio lighting, no clutter.'
  }
];

const experienceModes = [
  {
    label: 'Warm Intelligence',
    title: '温暖智能',
    text: '把 AI 的效率感转译成更有人味的视觉体验：光线柔和，反馈轻量，界面不喧闹。',
    accent: '#ffb44f'
  },
  {
    label: 'Dream Interface',
    title: '梦幻界面',
    text: '用漂浮层、玻璃折射和微粒运动营造空间纵深，让作品集像一间可进入的创意实验室。',
    accent: '#ffe29a'
  },
  {
    label: 'Restrained Tech',
    title: '克制科技',
    text: '减少复杂装饰，保留精确网格、低频动画和高质感留白，让技术气质更高级。',
    accent: '#ff7a3d'
  }
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回 zhy'sspace 首屏">
        <img src={publicAsset('assets/zhyspace-mark.png')} alt="" />
        <span>
          <strong>zhy'sspace</strong>
          <small>AI Designer</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="页面导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-snap" aria-label="zhy'sspace 首屏">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 760px)" srcSet={publicAsset('assets/hero-video-placeholder-sm.png')} />
          <img src={publicAsset('assets/hero-video-placeholder.png')} alt="" />
        </picture>
        <div className="hero-media__wash" />
        <div className="scanline" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy glass-panel">
          <p className="section-kicker">AI DESIGNER / CREATIVE SYSTEM</p>
          <h1>温暖、梦幻、克制的 AI 设计师作品集。</h1>
          <p className="hero-lede">
            zhy'sspace 是一个面向高端个人作品展示的数字空间：用暖橙光、白色留白、半透明玻璃材质与轻量交互动效，呈现 AI 设计师的视觉判断、作品案例与实验体验。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#works">
              查看作品案例
            </a>
            <a className="secondary-action" href="#experience">
              进入互动体验
            </a>
          </div>
          <dl className="hero-stats" aria-label="网站设计关键词">
            <div>
              <dt>01</dt>
              <dd>Warm AI</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Glass Layer</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Dream Tech</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-prompt glass-panel" aria-label="首屏动态视频提示词">
          <span className="prompt-label">Hero Video Prompt</span>
          <p>{heroMotionPrompt}</p>
          <span className="prompt-note">当前使用 PNG 占位，后续可替换为 MP4/WebM。</span>
        </aside>
      </div>
    </section>
  );
}

function RoleSection() {
  const abilities = [
    ['AI 视觉策略', '从概念、提示词到视觉母题，建立统一的作品调性。'],
    ['生成式海报', '输出具有系列感的视觉图像、海报版式与品牌化表达。'],
    ['动态影像方向', '为 AI 视频、首屏影片和案例短片提供镜头语言与提示词。'],
    ['交互体验设计', '将作品集做成具有记忆点的浏览体验，而不是普通信息模板。']
  ];

  return (
    <section id="role" className="section role-section">
      <div className="container two-column">
        <div className="section-heading">
          <p className="section-kicker">ROLE INTRODUCTION</p>
          <h2>角色介绍</h2>
          <p>
            你的身份被定义为 AI 设计师：核心不是堆砌工具，而是把生成式能力转化为更稳定、更高级的视觉系统。
          </p>
        </div>
        <div className="role-card glass-panel">
          <div className="role-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="role-label">zhy'sspace</p>
          <h3>AI Designer who builds visual atmospheres.</h3>
          <p>
            以温暖科技、梦幻玻璃材质和克制排版为基础，建立适合 PC 大屏展示的个人作品集，并兼顾移动端的加载与可读性。
          </p>
        </div>
      </div>

      <div className="container ability-grid" aria-label="AI 设计师能力模块">
        {abilities.map(([title, text], index) => (
          <article className="ability-card glass-panel" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkCard({ item, index }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className={`work-card glass-panel ${index === 0 ? 'work-card--featured' : ''}`}>
      <div className="work-media">
        <picture>
          <source media="(max-width: 760px)" srcSet={item.srcSm} />
          <img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
        </picture>
        <span className="work-type">{item.type}</span>
      </div>
      <div className="work-copy">
        <p className="section-kicker">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="prompt-box">
          <span>动态/视觉提示词</span>
          <p>{item.prompt}</p>
          <button type="button" onClick={copyPrompt}>
            {copied ? '已复制' : '复制提示词'}
          </button>
        </div>
      </div>
    </article>
  );
}

function WorksSection() {
  return (
    <section id="works" className="section works-section">
      <div className="container section-heading section-heading--wide">
        <p className="section-kicker">WORKS / CASES</p>
        <h2>作品案例：视频与海报</h2>
        <p>
          基础版本先用生成的 PNG 占位素材搭建案例区。后续你提供正式截图、图片、视频后，可以直接替换 public/assets 中对应文件，版式和动效无需重做。
        </p>
      </div>
      <div className="container works-grid">
        {workItems.map((item, index) => (
          <WorkCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [activeMode, setActiveMode] = useState(0);
  const current = experienceModes[activeMode];

  const rings = useMemo(() => Array.from({ length: 18 }, (_, index) => index), []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--mx', `${x}%`);
    event.currentTarget.style.setProperty('--my', `${y}%`);
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container two-column two-column--experience">
        <div className="section-heading">
          <p className="section-kicker">INTERACTIVE EXPERIENCE</p>
          <h2>互动体验</h2>
          <p>
            当前版本包含两层交互：桌面端的 Ghost Cursor 轨迹，以及下方实验面板的指针光场。移动端会自动降级，减少动画压力。
          </p>
          <div className="mode-tabs" aria-label="体验模式切换">
            {experienceModes.map((mode, index) => (
              <button
                key={mode.label}
                type="button"
                className={index === activeMode ? 'is-active' : ''}
                onClick={() => setActiveMode(index)}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="experience-lab glass-panel"
          style={{ '--experience-accent': current.accent }}
          onPointerMove={handlePointerMove}
        >
          <div className="experience-field" aria-hidden="true">
            {rings.map((ring) => (
              <span key={ring} style={{ '--i': ring }} />
            ))}
          </div>
          <div className="experience-content">
            <p className="section-kicker">LIVE MOOD</p>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <div className="experience-command">
              <span>Interaction Prompt</span>
              <p>{caseMotionPrompts[2].prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid glass-panel">
        <div className="contact-copy">
          <p className="section-kicker">CONTACT</p>
          <h2>联系方式</h2>
          <p>
            这里先使用占位联系方式，后续把真实电话与邮箱发给我后，可直接替换为正式信息。
          </p>
          <div className="contact-list">
            <a href="tel:+8600000000000">
              <span>电话</span>
              <strong>+86 000 0000 0000</strong>
            </a>
            <a href="mailto:hello@zhyspace.design">
              <span>邮箱</span>
              <strong>hello@zhyspace.design</strong>
            </a>
          </div>
        </div>
        <picture className="contact-art">
          <source media="(max-width: 760px)" srcSet={publicAsset('assets/contact-card-sm.png')} />
          <img src={publicAsset('assets/contact-card.png')} alt="zhy'sspace 暖色玻璃拟态联系方式卡片。" loading="lazy" />
        </picture>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div
        className="grain-overlay"
        aria-hidden="true"
        style={{ backgroundImage: `url(${publicAsset('assets/grain.png')})` }}
      />
      <GhostCursor />
      <Header />
      <main>
        <Hero />
        <RoleSection />
        <WorksSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
