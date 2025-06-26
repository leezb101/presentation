import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class SupportingSolutionsComponent extends BaseComponent {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    /* 字体缩放样式 */
    .text-4xl {
      font-size: calc(2.25rem * var(--font-scale, 1)) !important;
    }
    .text-3xl {
      font-size: calc(1.875rem * var(--font-scale, 1)) !important;
    }
    .text-2xl {
      font-size: calc(1.5rem * var(--font-scale, 1)) !important;
    }
    .text-xl {
      font-size: calc(1.25rem * var(--font-scale, 1)) !important;
    }
    .text-lg {
      font-size: calc(1.125rem * var(--font-scale, 1)) !important;
    }
    .text-base {
      font-size: calc(1rem * var(--font-scale, 1)) !important;
    }
    .text-sm {
      font-size: calc(0.875rem * var(--font-scale, 1)) !important;
    }
    .text-xs {
      font-size: calc(0.75rem * var(--font-scale, 1)) !important;
    }

    .solution-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid transparent;
    }

    .solution-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .solution-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 70%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transform: skewX(-30deg);
      transition: left 0.7s ease-in-out;
    }

    .solution-card:hover::before {
      left: 150%;
    }

    .category-title {
      position: relative;
      padding-bottom: 0.75rem;
      margin-bottom: 2rem;
    }

    .category-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      border-radius: 2px;
    }

    .title-blue::after {
      background-color: #3b82f6;
    }

    .title-green::after {
      background-color: #10b981;
    }

    @unocss-placeholder;
  `

  firstUpdated() {
    this.safeRequestAnimationFrame(() => this.initializeAnimations())
  }

  initializeAnimations() {
    const cards = this.shadowRoot.querySelectorAll('.solution-card')
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          ease: 'power2.out',
        }
      )
    }

    const titles = this.shadowRoot.querySelectorAll('.category-title')
    if (titles.length > 0) {
      gsap.fromTo(
        titles,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power1.out' }
      )
    }
  }

  getSolutionsData() {
    return {
      painPointSolutions: [
        {
          icon: 'mdi:sitemap-outline',
          title: '流程简化，一步到位',
          description:
            '智能合并“验收-入库”、“出库-安装”流程，大幅提升现场作业效率。',
        },
        {
          icon: 'mdi-microphone',
          title: '操作简便，轻松上手',
          description:
            '引入语音识别录入，并自动捕获时间、地点等关键信息，降低一线人员操作门槛。',
        },
        {
          icon: 'mdi:file-multiple-outline',
          title: '批量处理，高效协同',
          description:
            '支持以“交付号”为单位的批量赋码与验收，打通厂家到现场的第一公里。',
        },
        {
          icon: 'mdi:lock-check-outline',
          title: '专材专用，防止错用',
          description:
            '二维码与项目严格绑定，系统自动校验，有效防止材料在多项目并行时发生混用、错用。',
        },
      ],
      detailOptimizations: [
        {
          icon: 'mdi:swap-horizontal-bold',
          title: '灵活调拨，物尽其用',
          description: '支持跨项目物资调拨，全流程留痕，兼顾灵活性与合规性。',
        },
        {
          icon: 'mdi:puzzle-edit-outline',
          title: '特殊场景，从容应对',
          description:
            '提供备用码申领机制，从容应对“管道截取”等特殊情况，确保每一段材料都有码可依。',
        },
        {
          icon: 'mdi:autorenew',
          title: '冗余复用，降本增效',
          description: '未用尽的材料可高效退库、解绑，投入新项目，减少浪费。',
        },
        {
          icon: 'mdi:chart-bar-stacked',
          title: '智能比对，辅助决策',
          description:
            '自动比对计划、用量与竣工图信息，为审计与复盘提供数据支撑。',
        },
      ],
    }
  }

  render() {
    const data = this.getSolutionsData()
    return html`
      <div class="container mx-auto px-4 w-full max-w-7xl pb-12">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            配套方案：为复杂现场量身打造
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            平台的设计根植于解决一线实际问题，同时追求极致的用户体验。我们的方案不仅直击痛点，更在细节中彰显价值。
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- 痛点应对 -->
          <div class="space-y-6">
            <h3
              class="category-title title-blue text-2xl font-bold text-blue-700 text-center flex items-center justify-center gap-3"
            >
              <iconify-icon
                icon="mdi:target-arrow"
                class="text-3xl"
              ></iconify-icon>
              痛点应对
            </h3>
            ${data.painPointSolutions.map((item) =>
              this.renderCard(item, 'blue')
            )}
          </div>

          <!-- 细节优化 -->
          <div class="space-y-6">
            <h3
              class="category-title title-green text-2xl font-bold text-green-700 text-center flex items-center justify-center gap-3"
            >
              <iconify-icon
                icon="mdi:human-greeting-variant"
                class="text-3xl"
              ></iconify-icon>
              细节优化
            </h3>
            ${data.detailOptimizations.map((item) =>
              this.renderCard(item, 'green')
            )}
          </div>
        </div>
      </div>
    `
  }

  renderCard(item, color) {
    const colorClasses = {
      blue: {
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        iconBg: 'bg-blue-200',
        text: 'text-blue-800',
        desc: 'text-blue-700',
        border: 'border-blue-200',
        shadow: 'hover:shadow-blue-200/50',
      },
      green: {
        bg: 'bg-gradient-to-br from-green-50 to-green-100',
        iconBg: 'bg-green-200',
        text: 'text-green-800',
        desc: 'text-green-700',
        border: 'border-green-200',
        shadow: 'hover:shadow-green-200/50',
      },
    }
    const classes = colorClasses[color]

    return html`
      <div
        class="solution-card ${classes.bg} ${classes.border} rounded-xl p-6 shadow-lg ${classes.shadow}"
      >
        <div class="flex items-start gap-5">
          <div
            class="flex-shrink-0 w-12 h-12 ${classes.iconBg} rounded-lg flex items-center justify-center mt-1"
          >
            <iconify-icon
              icon="${item.icon}"
              class="text-3xl ${classes.text}"
            ></iconify-icon>
          </div>
          <div>
            <h4 class="text-lg font-semibold ${classes.text} mb-2">
              ${item.title}
            </h4>
            <p class="text-sm leading-relaxed ${classes.desc}">
              ${item.description}
            </p>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('supporting-solutions', SupportingSolutionsComponent)
