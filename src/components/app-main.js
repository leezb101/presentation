import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class AppMain extends BaseComponent {
  static properties = {
    currentSectionIndex: { type: Number },
    isAnimating: { type: Boolean },
  }

  constructor() {
    super()
    this.currentSectionIndex = 0
    this.isAnimating = false
    this.sections = []
    this.sectionIds = [
      'hero',
      'problem',
      'preliminary-work',
      'solution',
      'process',
      'supporting-solutions', // 新增
      'value',
      'roadmap',
    ]
  }

  static styles = css`
    :host {
      display: block;
    }

    .hero-background {
      position: relative;
      min-height: 100vh;
      width: 100%;
      background: linear-gradient(
        135deg,
        #f8fafc 0%,
        #e2e8f0 30%,
        #cbd5e1 60%,
        #e2e8f0 100%
      );
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-background::before {
      z-index: 0;
      content: '';
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave1 20s ease-in-out infinite;
      bottom: -100%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(135, 206, 250, 0) 20%,
        rgba(135, 206, 250, 0.12) 35%,
        rgba(135, 206, 250, 0.18) 50%,
        rgba(135, 206, 250, 0.12) 65%,
        rgba(135, 206, 250, 0) 80%
      );
    }

    .hero-background::after {
      z-index: 0;
      content: '';
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave2 25s ease-in-out infinite;
      animation-delay: -8s;
      bottom: -120%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(0, 191, 255, 0) 20%,
        rgba(0, 191, 255, 0.1) 35%,
        rgba(0, 191, 255, 0.15) 50%,
        rgba(0, 191, 255, 0.1) 65%,
        rgba(0, 191, 255, 0) 80%
      );
    }

    .wave-animation {
      z-index: 0;
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave3 30s ease-in-out infinite;
      animation-delay: -15s;
      bottom: -140%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(64, 224, 208, 0) 25%,
        rgba(64, 224, 208, 0.06) 40%,
        rgba(64, 224, 208, 0.12) 50%,
        rgba(64, 224, 208, 0.06) 60%,
        rgba(64, 224, 208, 0) 75%
      );
    }

    .hero-decoration {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .decorative-elements {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .floating-icon {
      position: absolute;
      width: 90px;
      height: 90px;
      background: rgba(74, 144, 226, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(15px);
      border: 2px solid rgba(74, 144, 226, 0.2);
      box-shadow: 0 12px 40px rgba(74, 144, 226, 0.15);
    }

    .floating-icon .icon {
      font-size: calc(36px * var(--font-scale, 1));
      color: rgba(74, 144, 226, 0.8);
    }

    .qr-icon {
      top: 18%;
      right: 12%;
      animation: floatEnhanced 4s ease-in-out infinite;
      animation-delay: 0s;
    }

    .cloud-icon {
      top: 40%;
      left: 8%;
      animation: floatEnhanced 5s ease-in-out infinite;
      animation-delay: 1s;
    }

    .pipe-icon {
      bottom: 25%;
      right: 25%;
      animation: floatEnhanced 4.5s ease-in-out infinite;
      animation-delay: 2s;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding: 0 40px;
    }

    .content-wrapper {
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .main-title {
      font-size: calc(clamp(3rem, 8vw, 6rem) * var(--font-scale, 1));
      font-weight: 700;
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
      position: relative;
      background: linear-gradient(
        105deg,
        #1e40af 0%,
        #1e40af 30%,
        #ffffff 50%,
        #1e40af 70%,
        #1e40af 100%
      );
      background-size: 300% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      animation: titleAppear 1s ease-out, shimmerText 6s ease-in-out infinite;
    }

    .sub-title {
      font-size: calc(clamp(1.5rem, 4vw, 2.5rem) * var(--font-scale, 1));
      font-weight: 500;
      margin-bottom: 2rem;
      position: relative;
      color: #0f766e;
      animation: titleAppear 1s ease-out 0.3s both;
    }

    .description {
      font-size: calc(clamp(1rem, 2.5vw, 1.4rem) * var(--font-scale, 1));
      line-height: 1.8;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      color: #475569;
      animation: titleAppear 1s ease-out 0.6s both;
    }

    @keyframes wave1 {
      from {
        transform: rotate(0deg) translateY(0) scale(1, 0.8);
      }
      50% {
        transform: rotate(180deg) translateY(-3%) scale(1.1, 1);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1, 0.8);
      }
    }

    @keyframes wave2 {
      from {
        transform: rotate(0deg) translateY(0) scale(1, 0.9);
      }
      50% {
        transform: rotate(180deg) translateY(-2%) scale(1, 1.1);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1, 0.9);
      }
    }

    @keyframes wave3 {
      from {
        transform: rotate(0deg) translateY(0) scale(1.1, 0.7);
      }
      50% {
        transform: rotate(180deg) translateY(-1%) scale(0.9, 1.2);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1.1, 0.7);
      }
    }

    @keyframes floatEnhanced {
      0%,
      100% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.7;
      }
      25% {
        transform: translateY(-20px) translateX(5px) scale(1.05);
        opacity: 0.9;
      }
      50% {
        transform: translateY(-10px) translateX(-5px) scale(1.1);
        opacity: 1;
      }
      75% {
        transform: translateY(-25px) translateX(3px) scale(1.05);
        opacity: 0.9;
      }
    }

    @keyframes shimmerText {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    @keyframes titleAppear {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        padding: 0 20px;
      }
      .floating-icon {
        width: 65px;
        height: 65px;
      }
      .floating-icon .icon {
        font-size: calc(28px * var(--font-scale, 1));
      }
      .qr-icon {
        top: 15%;
        right: 5%;
      }
      .cloud-icon {
        top: 35%;
        left: 5%;
      }
      .pipe-icon {
        bottom: 20%;
        right: 15%;
      }
    }

    @media (max-width: 480px) {
      .hero-content {
        padding: 0 15px;
      }
      .floating-icon {
        width: 55px;
        height: 55px;
      }
      .floating-icon .icon {
        font-size: calc(24px * var(--font-scale, 1));
      }
      .description {
        font-size: calc(1rem * var(--font-scale, 1));
        line-height: 1.6;
      }
    }

    @unocss-placeholder;
  `

  firstUpdated() {
    this.sections = this.shadowRoot.querySelectorAll('.report-section')
    this.showSection(0)
  }

  render() {
    return html`
      <main>
        <content-section
          id="hero"
          class="report-section ${this.currentSectionIndex === 0
            ? 'active'
            : ''}"
        >
          <div class="hero-background">
            <div class="wave-animation"></div>
            <div class="hero-decoration">
              <div class="decorative-elements">
                <div class="floating-icon qr-icon">
                  <iconify-icon icon="mdi:qrcode" class="icon"></iconify-icon>
                </div>
                <div class="floating-icon cloud-icon">
                  <iconify-icon
                    icon="mdi:cloud-outline"
                    class="icon"
                  ></iconify-icon>
                </div>
                <div class="floating-icon pipe-icon">
                  <iconify-icon icon="mdi:pipe" class="icon"></iconify-icon>
                </div>
              </div>
            </div>
            <div class="hero-content">
              <div class="content-wrapper">
                <h1 class="main-title">郑水小码</h1>
                <h2 class="sub-title">工程物料全生命周期数字化管理平台</h2>
                <p class="description">
                  用数字化、信息化理念，为每一件物料赋予智慧生命。实现从源头到末端的全过程精准管控，奠定集团智慧水务的坚实基础。
                </p>
              </div>
            </div>
          </div>
        </content-section>

        <content-section
          id="problem"
          class="report-section ${this.currentSectionIndex === 1
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4"><problem-analysis></problem-analysis></div>
        </content-section>

        <content-section
          id="preliminary-work"
          class="report-section ${this.currentSectionIndex === 2
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4"><preliminary-work></preliminary-work></div>
        </content-section>

        <content-section
          id="solution"
          class="report-section ${this.currentSectionIndex === 3
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4"><solution-showcase></solution-showcase></div>
        </content-section>

        <content-section
          id="process"
          class="report-section ${this.currentSectionIndex === 4
            ? 'active'
            : ''}"
        >
          <process-flow-component></process-flow-component>
        </content-section>

        <content-section
          id="supporting-solutions"
          class="report-section ${this.currentSectionIndex === 5
            ? 'active'
            : ''}"
        >
          <supporting-solutions></supporting-solutions>
        </content-section>

        <content-section
          id="value"
          class="report-section ${this.currentSectionIndex === 6
            ? 'active'
            : ''}"
        >
          <value-chart-component></value-chart-component>
        </content-section>

        <content-section
          id="roadmap"
          class="report-section ${this.currentSectionIndex === 7
            ? 'active'
            : ''}"
        >
          <roadmap-component></roadmap-component>
        </content-section>
      </main>

      <div id="page-nav" class="flex fixed right-6 bottom-6 z-50 space-x-3">
        <button
          id="prev-section-btn"
          class="flex justify-center items-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition bg-white/70 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ?disabled=${this.currentSectionIndex === 0}
          @click=${this.prevSection}
        >
          <iconify-icon icon="mdi:arrow-left" class="text-2xl"></iconify-icon>
        </button>
        <button
          id="next-section-btn"
          class="flex justify-center items-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition bg-white/70 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ?disabled=${this.currentSectionIndex === this.sectionIds.length - 1}
          @click=${this.nextSection}
        >
          <iconify-icon icon="mdi:arrow-right" class="text-2xl"></iconify-icon>
        </button>
      </div>
    `
  }

  showSection(newIndex) {
    if (this.isAnimating || newIndex < 0 || newIndex >= this.sectionIds.length)
      return
    if (newIndex === this.currentSectionIndex) return

    this.isAnimating = true
    this.currentSectionIndex = newIndex

    this.dispatchEvent(
      new CustomEvent('section-changed', {
        detail: {
          sectionIndex: newIndex,
          sectionId: this.getSectionIdByIndex(newIndex),
        },
        bubbles: true,
        composed: true,
      })
    )

    this.safeSetTimeout(() => {
      this.isAnimating = false
      const activeSection = this.shadowRoot.querySelector(
        '.report-section.active'
      )
      if (activeSection && activeSection.checkContentHeight) {
        activeSection.checkContentHeight()
      }
    }, 500)
  }

  getSectionIdByIndex(index) {
    return this.sectionIds[index] || 'hero'
  }

  getSectionIndexById(sectionId) {
    return this.sectionIds.indexOf(sectionId)
  }

  handleSectionChange(sectionId) {
    const newIndex = this.getSectionIndexById(sectionId)
    if (newIndex !== -1) {
      this.showSection(newIndex)
    }
  }

  prevSection() {
    this.showSection(this.currentSectionIndex - 1)
  }

  nextSection() {
    this.showSection(this.currentSectionIndex + 1)
  }
}

customElements.define('app-main', AppMain)
