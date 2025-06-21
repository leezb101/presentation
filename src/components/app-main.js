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
  }

  static styles = css`
    :host {
      display: block;
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
          <div class="text-center">
            <h1 class="mb-4 text-4xl font-bold text-blue-800 md:text-6xl">
              工程物料全生命周期数字化管理平台
            </h1>
            <p class="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              用数字孪生理念，为每一件物料赋予智慧生命。实现从源头到末端的全过程精准管控，奠定集团智慧水务的坚实基础。
            </p>
          </div>
        </content-section>

        <content-section
          id="problem"
          class="report-section ${this.currentSectionIndex === 1
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4">
            <problem-analysis></problem-analysis>
          </div>
        </content-section>

        <content-section
          id="preliminary-work"
          class="report-section ${this.currentSectionIndex === 2
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4">
            <preliminary-work></preliminary-work>
          </div>
        </content-section>

        <content-section
          id="solution"
          class="report-section ${this.currentSectionIndex === 3
            ? 'active'
            : ''}"
        >
          <div class="w-full px-4">
            <solution-showcase></solution-showcase>
          </div>
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
          id="value"
          class="report-section ${this.currentSectionIndex === 5
            ? 'active'
            : ''}"
        >
          <value-chart-component></value-chart-component>
        </content-section>

        <content-section
          id="roadmap"
          class="report-section ${this.currentSectionIndex === 6
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
          ?disabled=${this.currentSectionIndex === 6}
          @click=${this.nextSection}
        >
          <iconify-icon icon="mdi:arrow-right" class="text-2xl"></iconify-icon>
        </button>
      </div>
    `
  }

  showSection(newIndex) {
    if (this.isAnimating || newIndex < 0 || newIndex >= 7) return
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
      // 通知当前活动的 content-section 检测高度
      const activeSection = this.shadowRoot.querySelector('.report-section.active')
      if (activeSection && activeSection.checkContentHeight) {
        activeSection.checkContentHeight()
      }
    }, 500)
  }

  getSectionIdByIndex(index) {
    const sectionIds = [
      'hero',
      'problem',
      'preliminary-work',
      'solution',
      'process',
      'value',
      'roadmap',
    ]
    return sectionIds[index] || 'hero'
  }

  getSectionIndexById(sectionId) {
    const sectionIds = [
      'hero',
      'problem',
      'preliminary-work',
      'solution',
      'process',
      'value',
      'roadmap',
    ]
    return sectionIds.indexOf(sectionId)
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
