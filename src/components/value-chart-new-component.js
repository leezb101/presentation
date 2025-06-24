import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class ValueChartComponent extends BaseComponent {
  static properties = {
    currentTab: { type: String },
  }

  static styles = css`
    :host {
      display: block;
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

    /* AI声明样式 */
    .ai-disclaimer-kpi {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #f0f9ff; /* Blue-50 */
      border: 1px solid #bae6fd; /* Blue-200 */
      border-radius: 0.5rem;
      font-size: calc(0.875rem * var(--font-scale, 1)) !important;
      color: #0369a1; /* Blue-700 */
      margin: -1rem auto 2.5rem auto;
      max-width: 90%;
    }

    /* KPI卡片内大数据参考样式 */
    .big-data-summary {
      margin-top: 1rem;
      padding: 0.75rem;
      background-color: #fafafa; /* Gray-50 */
      border-left: 3px solid #a78bfa; /* Purple-400 */
      text-align: left;
      font-size: calc(0.8rem * var(--font-scale, 1)) !important;
      line-height: 1.5;
      color: #581c87; /* Purple-900 */
    }
    .big-data-summary strong {
      font-weight: 600;
    }

    /* 趋势可视化条形图样式 */
    .trend-bar-container {
      position: relative;
      height: 1.25rem;
      background-color: #e5e7eb;
      border-radius: 0.5rem;
      overflow: hidden;
    }
    .trend-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 0.5rem;
      transition: width 0.8s ease-in-out;
    }
    .trend-bar.before {
      background-color: #fca5a5; /* Red-300 */
      z-index: 1;
    }
    .trend-bar.after {
      background-color: #60a5fa; /* Blue-400 */
      z-index: 2;
    }
    .trend-bar.after.supervision {
      background-color: #4ade80; /* Green-400 */
    }
    .trend-bar.after.traceability {
      background-color: #c084fc; /* Purple-400 */
    }

    @unocss-placeholder;
  `

  constructor() {
    super()
    this.currentTab = 'overview' // 'overview', 'material', 'supervision', 'traceability'
  }

  // 获取项目价值数据（概念化版本 + 大数据参考）
  getValueData() {
    return {
      kpiComparison: {
        material: [
          {
            name: '材料损耗',
            trend: 'down',
            description: '精准追踪，大幅减少现场浪费与非必要损耗。',
            before_w: '80%',
            after_w: '30%',
            big_data_summary:
              '行业统计，传统工程项目物料损耗率常在 <strong>5%-15%</strong> 区间。',
          },
          {
            name: '库存准确性',
            trend: 'up',
            description: '实时同步库存数据，告别手工账，库存状况一目了然。',
            before_w: '75%',
            after_w: '95%',
            big_data_summary:
              '数字化工具可将库存准确率从普遍的 <strong>70%-85%</strong> 提升至 <strong>95%</strong> 以上。',
          },
          {
            name: '质量验证效率',
            trend: 'up',
            description: '扫码即览全部信息，验收流程从半小时缩短至数分钟。',
            before_w: '20%',
            after_w: '90%',
            big_data_summary:
              '移动化、可视化的信息核对，可将相关文书工作效率提升约 <strong>60%</strong>。',
          },
        ],
        supervision: [
          {
            name: '现场巡检负担',
            trend: 'down',
            description: '移动端高效记录与上报，减少文书工作，聚焦核心问题。',
            before_w: '85%',
            after_w: '40%',
            big_data_summary:
              '数字化工具可帮助现场管理人员减少约 <strong>75%</strong> 的重复性文书工作量。',
          },
          {
            name: '问题响应周期',
            trend: 'down',
            description:
              '问题发现即上报，相关方即时接收，响应周期从天级缩短至小时级。',
            before_w: '90%',
            after_w: '15%',
            big_data_summary:
              '信息直达使问题从发现到处理的周期平均缩短 <strong>75%</strong> 以上，有效避免工期延误。',
          },
          {
            name: '流程合规性',
            trend: 'up',
            description:
              '关键节点强制留痕，确保管理动作有据可循，提升整体合规水平。',
            before_w: '80%',
            after_w: '95%',
            big_data_summary:
              '强制留痕的数字化流程可将关键节点的执行合规率提升 <strong>10-15</strong> 个百分点。',
          },
        ],
        traceability: [
          {
            name: '信息检索耗时',
            trend: 'down',
            description:
              '从翻箱倒柜找资料，到关键词全局搜索，信息获取效率呈指数级提升。',
            before_w: '95%',
            after_w: '10%',
            big_data_summary:
              '全生命周期追溯可将物料信息的查找时间缩短 <strong>90%</strong> 以上。',
          },
          {
            name: '追溯链完整度',
            trend: 'up',
            description:
              '一物一码贯穿始终，打通信息孤岛，形成完整、可靠的追溯链条。',
            before_w: '40%',
            after_w: '98%',
            big_data_summary:
              '“一物一码”技术确保了数据在各环节的无损流转，数据完整性可达 <strong>99%</strong> 以上。',
          },
          {
            name: '数据可信度',
            trend: 'up',
            description:
              '数据由流程自动产生，不可篡改，为决策与审计提供高可信度依据。',
            before_w: '60%',
            after_w: '95%',
            big_data_summary:
              '基于不可篡改的记录，数字化凭证在责任界定与争议解决中的采信度显著提升。',
          },
        ],
      },
      overviewValues: [
        {
          title: '显著的效率提升',
          icon: 'mdi:speedometer',
          color: 'blue',
          description:
            '通过自动化记录、快速信息检索和优化的协同流程，将传统模式下耗时耗力的手动工作转变为高效的数字化操作，全面提升项目执行效率。',
        },
        {
          title: '可观的成本节约',
          icon: 'mdi:chart-timeline-variant-shimmer',
          color: 'green',
          description:
            '精准的材料管理大幅减少了浪费和非必要采购。高效的协同与问题处理能力，降低了因延误和返工产生的隐性成本。',
        },
        {
          title: '可靠的质量保障',
          icon: 'mdi:shield-check',
          color: 'purple',
          description:
            '为每一件材料建立唯一的数字身份，实现了从源头到使用的全过程透明化管控。确保了质量责任可追溯，流程合规有保障。',
        },
      ],
      realWorldImpact: [
        {
          scenario: '应对突发质量问题',
          before:
            '传统模式下，需要人工翻找纸质档案，联系多方确认，过程繁琐，耗时费力。',
          after:
            '数字化平台支持在数分钟内锁定问题材料的全部关联信息，为快速决策提供支持。',
          icon: 'mdi:alert-octagon',
        },
        {
          scenario: '支撑内部成本与责任审核',
          before:
            '成本核算依赖零散的纸质单据，责任界定困难，导致部门间数据不一致，管理决策缺乏可靠依据。',
          after:
            '系统提供统一、不可篡改的数字档案，精准追溯物料的成本与使用责任人，为集团精细化管理和内部审核提供坚实的数据支撑。',
          icon: 'mdi:file-chart-check-outline',
        },
      ],
    }
  }

  render() {
    return html`
      <div class="w-full flex flex-col items-center">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            项目价值：一场可感知的管理变革
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            我们关注的不仅是数字的提升，更是管理模式的根本性转变，聚焦于效率、成本与质量的核心价值。
          </p>
        </div>

        <div
          class="flex gap-2 mb-8 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
        >
          ${[
            { id: 'overview', label: '价值总览', icon: 'mdi:view-dashboard' },
            { id: 'material', label: '材料管理', icon: 'mdi:package-variant' },
            {
              id: 'supervision',
              label: '责任监督',
              icon: 'mdi:shield-account',
            },
            {
              id: 'traceability',
              label: '追溯流程',
              icon: 'mdi:timeline-text',
            },
          ].map(
            (tab) => html`
              <button
                class="px-6 py-3 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${this
                  .currentTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                  : 'text-gray-600 hover:bg-gray-50'}"
                @click=${() => this.switchTab(tab.id)}
              >
                <iconify-icon icon="${tab.icon}" class="text-lg"></iconify-icon>
                ${tab.label}
              </button>
            `
          )}
        </div>

        <div class="w-full max-w-7xl">
          ${this.currentTab === 'overview'
            ? this.renderOverviewTab()
            : this.currentTab === 'material'
            ? this.renderKpiTab('material', '材料管理变革', 'blue')
            : this.currentTab === 'supervision'
            ? this.renderKpiTab('supervision', '监督模式升级', 'green')
            : this.renderKpiTab('traceability', '追溯能力进化', 'purple')}
        </div>
      </div>
    `
  }

  // 渲染价值总览标签页
  renderOverviewTab() {
    const data = this.getValueData()
    return html`
      <div class="space-y-8">
        <div class="grid lg:grid-cols-3 gap-8">
          ${data.overviewValues.map(
            (value) => html`
              <div
                class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  class="w-20 h-20 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <iconify-icon
                    icon="${value.icon}"
                    class="text-4xl text-${value.color}-600"
                  ></iconify-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">
                  ${value.title}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  ${value.description}
                </p>
              </div>
            `
          )}
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            真实场景下的改变
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            ${data.realWorldImpact.map(
              (impact) => html`
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div class="flex items-center mb-4">
                    <div
                      class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shrink-0"
                    >
                      <iconify-icon
                        icon="${impact.icon}"
                        class="text-2xl text-white"
                      ></iconify-icon>
                    </div>
                    <h4 class="font-bold text-xl text-gray-800">
                      ${impact.scenario}
                    </h4>
                  </div>
                  <div class="space-y-4">
                    <div
                      class="p-4 bg-red-50 border-l-4 border-red-300 rounded-r-lg"
                    >
                      <p class="font-semibold text-red-700 mb-1">传统模式:</p>
                      <p class="text-sm text-gray-700">${impact.before}</p>
                    </div>
                    <div
                      class="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg"
                    >
                      <p class="font-semibold text-green-700 mb-1">
                        数字化平台:
                      </p>
                      <p class="text-sm text-gray-700">${impact.after}</p>
                    </div>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `
  }

  // 渲染通用的KPI对比标签页
  renderKpiTab(category, title, color) {
    const kpis = this.getValueData().kpiComparison[category]
    return html`
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-800 mb-8 text-center">
          ${title}
        </h3>

        <div class="ai-disclaimer-kpi">
          <span
            >以下效益数据由AI基于近年行业报告与大数据分析提炼，仅供参考</span
          >
        </div>

        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          ${kpis.map(
            (kpi) => html`
              <div class="text-center flex flex-col">
                <h4
                  class="text-xl font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2"
                >
                  ${kpi.name}
                  ${kpi.trend === 'down'
                    ? html`<iconify-icon
                        icon="mdi:arrow-down-bold-circle"
                        class="text-red-500"
                      ></iconify-icon>`
                    : html`<iconify-icon
                        icon="mdi:arrow-up-bold-circle"
                        class="text-green-500"
                      ></iconify-icon>`}
                </h4>
                <p class="text-sm text-gray-600 mb-4 min-h-[40px]">
                  ${kpi.description}
                </p>
                <div class="space-y-3">
                  <div>
                    <div
                      class="flex justify-between items-center mb-1"
                      style="font-size: calc(0.75rem * var(--font-scale, 1)); color: #6b7280;"
                    >
                      <span>传统模式</span>
                      <span class="font-mono"
                        >${kpi.trend === 'up' ? '较低' : '较高'}</span
                      >
                    </div>
                    <div class="trend-bar-container">
                      <div
                        class="trend-bar before"
                        style="width: ${kpi.before_w};"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="flex justify-between items-center mb-1"
                      style="font-size: calc(0.75rem * var(--font-scale, 1)); color: #6b7280;"
                    >
                      <span>数字化平台</span>
                      <span class="font-mono font-semibold text-${color}-600"
                        >${kpi.trend === 'up' ? '更高' : '更低'}</span
                      >
                    </div>
                    <div class="trend-bar-container">
                      <div
                        class="trend-bar after ${category}"
                        style="width: ${kpi.after_w};"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="big-data-summary">
                  <p .innerHTML="${kpi.big_data_summary}"></p>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `
  }

  // 切换标签页
  switchTab(tab) {
    if (this.currentTab === tab) return
    this.currentTab = tab
    this.requestUpdate()
  }

  firstUpdated() {
    this.initializeAnimations()
  }

  // 初始化动画
  initializeAnimations() {
    gsap.fromTo(
      this.shadowRoot.querySelectorAll('.bg-white, .bg-gray-50'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      }
    )
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('currentTab')) {
      // 触发展示动画
      this.safeRequestAnimationFrame(() => {
        this.initializeAnimations()
      })
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // 由于移除了Chart.js，这里不再需要销毁图表
  }
}

customElements.define('value-chart-new-component', ValueChartComponent)
