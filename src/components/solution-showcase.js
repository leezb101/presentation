import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class SolutionShowcaseComponent extends BaseComponent {
  static properties = {
    currentView: { type: String },
  }

  static styles = css`
    @unocss-placeholder;
  `

  constructor() {
    super()
    this.currentView = 'concept' // 'concept' or 'architecture'
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('currentView')) {
      this.safeRequestAnimationFrame(() => {
        if (this.currentView === 'concept') {
          this.initializeConceptAnimations()
        }
        // 通知父容器重新检测高度
        this.notifyContentHeightChange()
      })
    }
  }

  notifyContentHeightChange() {
    // 找到父级的 content-section 并触发高度检测
    const contentSection = this.closest('content-section')
    if (contentSection && contentSection.checkContentHeight) {
      setTimeout(() => contentSection.checkContentHeight(), 100)
    }
  }

  initializeConceptAnimations() {
    // 初始化卡片入场动画
    const cards = this.shadowRoot.querySelectorAll('.concept-card')
    if (cards.length > 0) {
      gsap.from(cards, {
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      })
    }

    // 初始化二维码动画
    this.safeRequestAnimationFrame(() => {
      this.initializeConceptQRCode()
    })
  }

  firstUpdated() {
    if (this.currentView === 'concept') {
      this.safeRequestAnimationFrame(() => {
        this.initializeConceptAnimations()
      })
    }
  }

  renderConceptFlow() {
    // 三步流程数据
    const flowSteps = [
      {
        title: '物理实体',
        icon: 'mdi:cube-outline',
        color: '#3b82f6',
        bgGradient: 'from-blue-50 to-blue-100',
        borderColor: 'border-blue-200',
        desc: '每一件物料都拥有唯一身份标识',
        subtext: '管材、配件、阀门等水务物料',
        isHighlight: false,
      },
      {
        title: '唯一二维码',
        icon: 'mdi:qrcode',
        color: '#06b6d4',
        bgGradient: 'from-cyan-50 to-cyan-100',
        borderColor: 'border-cyan-300',
        desc: '二维码全生命周期追溯',
        subtext: '一物一码，身份唯一',
        isHighlight: true,
      },
      {
        title: '数字档案',
        icon: 'mdi:database-outline',
        color: '#10b981',
        bgGradient: 'from-emerald-50 to-emerald-100',
        borderColor: 'border-emerald-200',
        desc: '扫码直达物料全息档案',
        subtext: '生产、检验、运维全记录',
        isHighlight: false,
      },
    ]

    return html`
      <div
        class="bg-white rounded-3xl shadow-2xl p-6 max-w-7xl w-full flex flex-col items-center animate-fadeIn"
      >
        <div class="mb-12 text-center">
          <h3 class="text-3xl font-bold text-blue-600 mb-4">
            核心理念：一物一码
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">
            为每一件物料赋予唯一的二维码，伴随其全生命周期。扫描二维码即可链接其数字档案，解决信息与实体分离的难题，实现物料的精准追溯和智能管理。
          </p>
        </div>

        <!-- 流程卡片容器 -->
        <div class="relative w-full max-w-6xl mb-8">
          <!-- 连接线容器 -->
          <div class="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
            <svg
              class="w-full h-8"
              viewBox="0 0 1000 32"
              preserveAspectRatio="none"
            >
              <!-- 第一段连接线 -->
              <path
                id="flow-line-1"
                d="M250 16 Q350 8 450 16"
                stroke="url(#gradient1)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,4"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-12;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <!-- 第二段连接线 -->
              <path
                id="flow-line-2"
                d="M550 16 Q650 8 750 16"
                stroke="url(#gradient2)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,4"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-12;0"
                  dur="3s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </path>
              <!-- 箭头 -->
              <polygon
                points="445,13 455,16 445,19"
                fill="#3b82f6"
                opacity="0.7"
              />
              <polygon
                points="745,13 755,16 745,19"
                fill="#06b6d4"
                opacity="0.7"
              />

              <!-- 渐变定义 -->
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style="stop-color:#3b82f6;stop-opacity:0.6"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#06b6d4;stop-opacity:0.8"
                  />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style="stop-color:#06b6d4;stop-opacity:0.6"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#10b981;stop-opacity:0.8"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <!-- 卡片布局 -->
          <div class="flex items-center justify-between gap-18 relative z-10">
            ${flowSteps.map(
              (step, idx) => html`
                <div
                  class="concept-card group flex flex-col items-center p-6 bg-gradient-to-br ${step.bgGradient} rounded-2xl border-2 ${step.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${step.isHighlight
                    ? 'ring-4 ring-cyan-200 scale-105 shadow-2xl'
                    : ''}"
                  style="width: ${step.isHighlight
                    ? '260px'
                    : '240px'}; min-height: 280px;"
                  @mouseenter=${() => this.handleCardHover(idx)}
                >
                  <!-- 图标区域 -->
                  <div
                    class="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md transition-all duration-300 bg-white group-hover:scale-110 ${step.isHighlight
                      ? 'ring-2 ring-cyan-200'
                      : ''}"
                    style="color: ${step.color}; border: 3px solid ${step.color}20;"
                  >
                    <iconify-icon
                      icon="${step.icon}"
                      class="text-5xl transition-transform duration-300 group-hover:scale-110"
                      style="color: ${step.color};"
                    ></iconify-icon>
                  </div>

                  <!-- 标题 -->
                  <h4
                    class="text-xl font-bold text-gray-800 mb-3 text-center ${step.isHighlight
                      ? 'text-cyan-700'
                      : ''}"
                  >
                    ${step.title}
                  </h4>

                  <!-- 描述 -->
                  <p
                    class="text-sm text-gray-600 text-center mb-3 leading-relaxed"
                  >
                    ${step.desc}
                  </p>

                  <!-- 副文本 -->
                  <p class="text-xs text-gray-500 text-center font-medium">
                    ${step.subtext}
                  </p>

                  <!-- 特殊内容：二维码展示 -->
                  ${idx === 1
                    ? html`
                        <div
                          class="mt-4 relative w-20 h-20 rounded-lg overflow-hidden bg-black shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-cyan-300"
                        >
                          <canvas
                            id="concept-qr-canvas"
                            width="80"
                            height="80"
                            class="w-full h-full"
                          ></canvas>
                          <div
                            id="concept-scan-line"
                            class="absolute left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 rounded-sm"
                            style="top: 0px;"
                          ></div>
                        </div>
                      `
                    : ''}

                  <!-- 悬浮效果装饰 -->
                  <div
                    class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-blue-400/5 group-hover:via-cyan-400/5 group-hover:to-emerald-400/5 transition-all duration-500"
                  ></div>

                  <!-- 高亮装饰 -->
                  ${step.isHighlight
                    ? html`
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <iconify-icon
                            icon="mdi:star"
                            class="text-white text-sm"
                          ></iconify-icon>
                        </div>
                      `
                    : ''}
                </div>
              `
            )}
          </div>
        </div>

        <!-- 交互说明 -->
        <div class="text-center text-gray-500 text-sm">
          悬停卡片体验交互效果，二维码卡片为核心理念
        </div>
      </div>
    `
  }

  handleCardHover(idx) {
    // 添加卡片悬停时的额外动画效果
    const cards = this.shadowRoot.querySelectorAll('.concept-card')
    if (cards[idx]) {
      // 可以添加额外的GSAP动画
      gsap.to(cards[idx].querySelector('iconify-icon'), {
        rotation: 360,
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }

  initializeConceptQRCode() {
    const qrCanvas = this.shadowRoot.querySelector('#concept-qr-canvas')
    const scanLine = this.shadowRoot.querySelector('#concept-scan-line')

    if (qrCanvas && qrCanvas.getContext) {
      const ctx = qrCanvas.getContext('2d')
      const size = 8
      const cell = qrCanvas.width / size
      ctx.clearRect(0, 0, qrCanvas.width, qrCanvas.height)

      // 绘制更精细的二维码
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          ctx.fillStyle = Math.random() > 0.5 ? '#222' : '#fff'
          ctx.fillRect(i * cell, j * cell, cell, cell)
        }
      }

      // 使用GSAP制作扫描线动画
      if (scanLine) {
        gsap.set(scanLine, { y: 0 })
        gsap.to(scanLine, {
          y: qrCanvas.height - 8,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        })
      }
    }
  }

  switchView(view) {
    this.currentView = view
    this.requestUpdate()
  }

  render() {
    return html`
      <div class="w-full flex flex-col items-center relative">
        <div class="text-center mb-8 z-10 relative">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">我们的解决方案</h2>
          <p class="text-lg text-gray-400 max-w-xl mx-auto">
            构建一体化数字平台，以"一物一码"为核心，打造"云+三端"协同体系
          </p>
        </div>
        
        <div class="w-full max-w-7xl flex items-start justify-center relative">
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full justify-center"
            style="display: ${this.currentView === 'concept'
              ? 'flex'
              : 'none'};"
          >
            ${this.renderConceptFlow()}
          </div>
          <div
            class="w-full animate-fadeIn"
            style="display: ${this.currentView === 'architecture'
              ? 'block'
              : 'none'}"
          >
            <cloud-architecture></cloud-architecture>
          </div>
        </div>

        <!-- 切换按钮 -->
        <div class="flex gap-4 justify-center mt-8 z-20">
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this
              .currentView === 'concept'
              ? 'bg-blue-500 text-white shadow-blue-200'
              : 'bg-white/80 text-slate-700'}"
            @click=${() => this.switchView('concept')}
          >
            核心理念
          </button>
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this
              .currentView === 'architecture'
              ? 'bg-blue-500 text-white shadow-blue-200'
              : 'bg-white/80 text-slate-700'}"
            @click=${() => this.switchView('architecture')}
          >
            系统架构
          </button>
        </div>
      </div>
    `
  }
}

customElements.define('solution-showcase', SolutionShowcaseComponent)
