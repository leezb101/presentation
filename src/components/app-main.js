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
    @unocss-placeholder
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
          <div class="container px-6 mx-auto text-center">
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900">
                现状与痛点：传统管理的瓶颈
              </h2>
              <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                我们正面临三大核心挑战，制约着工程质量与管理效率的提升。
              </p>
            </div>
            <div class="grid gap-8 mx-auto max-w-5xl md:grid-cols-3">
              <div class="p-8 bg-white rounded-xl shadow-md">
                <div
                  class="flex justify-center items-center mb-6 w-16 h-16 text-red-600 bg-red-100 rounded-full"
                >
                  <iconify-icon
                    icon="mdi:magnify-scan"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-3 text-xl font-bold">质量追溯难</h3>
                <p class="text-gray-600">
                  出现质量事故，责任追溯耗时耗力，难以快速定位问题批次、供应商及安装环节。
                </p>
              </div>
              <div class="p-8 bg-white rounded-xl shadow-md">
                <div
                  class="flex justify-center items-center mb-6 w-16 h-16 text-yellow-600 bg-yellow-100 rounded-full"
                >
                  <iconify-icon
                    icon="mdi:package-variant"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-3 text-xl font-bold">物料损耗大</h3>
                <p class="text-gray-600">
                  现场管理粗放，物料浪费、积压、丢失现象频发，直接增加项目成本。
                </p>
              </div>
              <div class="p-8 bg-white rounded-xl shadow-md">
                <div
                  class="flex justify-center items-center mb-6 w-16 h-16 text-blue-600 bg-blue-100 rounded-full"
                >
                  <iconify-icon
                    icon="mdi:account-group-outline"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-3 text-xl font-bold">协同效率低</h3>
                <p class="text-gray-600">
                  建设、施工、监理、供应四方信息孤立，沟通成本高，影响工程进度。
                </p>
              </div>
            </div>
          </div>
        </content-section>

        <content-section
          id="preliminary-work"
          class="report-section ${this.currentSectionIndex === 2
            ? 'active'
            : ''}"
        >
          <div class="container px-6 mx-auto text-center">
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900">
                前期工作：深入一线，夯实基础
              </h2>
              <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                为确保平台方案精准、可行，我们开展了全面深入的调研与沟通。
              </p>
            </div>
            <div
              class="grid gap-8 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-4"
            >
              <div class="p-6 bg-white rounded-lg">
                <div
                  class="flex justify-center items-center mb-4 h-10 text-blue-600"
                >
                  <iconify-icon
                    icon="mdi:hard-hat"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-2 text-lg font-semibold">施工现场调研</h3>
                <p class="text-sm text-gray-600">
                  深入多个项目一线，实地考察材料管理现状，梳理操作流程中的关键节点与痛点。
                </p>
              </div>
              <div class="p-6 bg-white rounded-lg">
                <div
                  class="flex justify-center items-center mb-4 h-10 text-blue-600"
                >
                  <iconify-icon
                    icon="mdi:factory"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-2 text-lg font-semibold">供应厂家调研</h3>
                <p class="text-sm text-gray-600">
                  走访主要材料供应商，明确其出库、物流、质检报告等流程，探讨赋码可行性。
                </p>
              </div>
              <div class="p-6 bg-white rounded-lg">
                <div
                  class="flex justify-center items-center mb-4 h-10 text-blue-600"
                >
                  <iconify-icon
                    icon="mdi:cube-outline"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-2 text-lg font-semibold">材料入库跟踪</h3>
                <p class="text-sm text-gray-600">
                  全程跟踪材料从卸货到入库的全过程，记录各环节单据交接与信息核验的实际情况。
                </p>
              </div>
              <div class="p-6 bg-white rounded-lg">
                <div
                  class="flex justify-center items-center mb-4 h-10 text-blue-600"
                >
                  <iconify-icon
                    icon="mdi:account-group-outline"
                    class="text-4xl"
                  ></iconify-icon>
                </div>
                <h3 class="mb-2 text-lg font-semibold">多方需求会谈</h3>
                <p class="text-sm text-gray-600">
                  与建设、监理、施工及建管单位多次会谈，充分听取各方诉求，凝聚管理共识。
                </p>
              </div>
            </div>
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
