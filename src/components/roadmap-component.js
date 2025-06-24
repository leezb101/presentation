import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class RoadmapComponent extends BaseComponent {
  static styles = css`
    /* 字体缩放样式 */
    .text-4xl { font-size: calc(2.25rem * var(--font-scale, 1)) !important; }
    .text-3xl { font-size: calc(1.875rem * var(--font-scale, 1)) !important; }
    .text-2xl { font-size: calc(1.5rem * var(--font-scale, 1)) !important; }
    .text-xl { font-size: calc(1.25rem * var(--font-scale, 1)) !important; }
    .text-lg { font-size: calc(1.125rem * var(--font-scale, 1)) !important; }
    .text-base { font-size: calc(1rem * var(--font-scale, 1)) !important; }
    .text-sm { font-size: calc(0.875rem * var(--font-scale, 1)) !important; }
    .text-xs { font-size: calc(0.75rem * var(--font-scale, 1)) !important; }
    
    @unocss-placeholder .roadmap-item {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.6s ease;
    }

    .roadmap-item.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .roadmap-item.from-right {
      transform: translateX(50px);
    }

    .roadmap-item.from-right.visible {
      transform: translateX(0);
    }

    .timeline-step {
      transition: all 0.3s ease;
    }

    .timeline-step:hover .phase-badge {
      transform: scale(1.2) translateX(-50%);
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.6),
        0 0 60px rgba(59, 130, 246, 0.3);
      filter: brightness(1.1);
    }

    .timeline-step:hover .roadmap-card {
      transform: translateY(-8px) translateX(8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(59, 130, 246, 0.1);
      border-left-width: 6px;
    }

    .phase-badge {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .roadmap-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .details-list {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .details-list.expanded {
      max-height: calc(200px * var(--font-scale, 1) * 1.5);
    }

    .detail-item {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.2s ease;
    }

    .detail-item.show {
      opacity: 1;
      transform: translateY(0);
    }

    /* 额外的发光效果 */
    .phase-badge-glow {
      position: relative;
    }

    .phase-badge-glow::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: inherit;
      border-radius: inherit;
      filter: blur(8px);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }

    .timeline-step:hover .phase-badge-glow::before {
      opacity: 0.7;
    }
  `

  constructor() {
    super()
    this.visibleItems = new Set()
    this.expandedIndex = -1
    this.roadmapData = [
      {
        phase: 1,
        duration: '1-3周',
        title: '前期准备阶段',
        description: '需求调研与目标确认，组建项目组，完成资源与协作规划。',
        details: [
          '组织核心用户召开需求研讨会，明确核心痛点',
          '组建项目组：需求分析师、技术开发、数据工程师、现场实施团队、运维团队',
        ],
        icon: '🎯',
      },
      {
        phase: 2,
        duration: '第4周',
        title: '方案设计阶段',
        description: '技术架构设计，开发APP支持扫码巡检，管理端Web平台设计。',
        details: [
          'APP开发：扫码、巡检打卡、异常上报（离线模式缓存数据）',
          '管理端Web平台：权限管理、数据编辑功能',
          '小程序：展示基础信息，避免敏感数据泄露',
        ],
        icon: '📋',
      },
      {
        phase: 3,
        duration: '5-10周',
        title: '系统开发与集成阶段',
        description: '按模块开发，系统集成与对接，测试验证。',
        details: [
          '按模块进行系统开发',
          '系统集成与第三方系统对接',
          '全面测试验证系统功能',
        ],
        icon: '⚙️',
      },
      {
        phase: 4,
        duration: '11-13周',
        title: '试点部署与培训阶段',
        description: '小范围试点上线，收集反馈，解决问题，用户培训。',
        details: [
          '选择1-2个典型区域作为试点，部署生产环境',
          '收集试点反馈，解决BUG问题',
          '开展用户培训，确保顺利使用',
        ],
        icon: '🚀',
      },
      {
        phase: 5,
        duration: '长期',
        title: '全面推广与运营阶段',
        description: '全量部署，迭代优化，根据用户需求新增功能，扩展应用场景。',
        details: [
          '全量部署到所有区域',
          '迭代优化：新增管道风险预测等功能',
          '扩展场景：基于用户体验，持续扩展需求',
        ],
        icon: '📈',
      },
    ]
  }

  connectedCallback() {
    super.connectedCallback()
    this.setupIntersectionObserver()
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              entry.target.classList.add('visible')
              this.visibleItems.add(index)
            }, index * 200)
          }
        })
      },
      { threshold: 0.3 }
    )

    setTimeout(() => {
      this.shadowRoot
        ?.querySelectorAll('.roadmap-item')
        .forEach((item, index) => {
          item.dataset.index = index
          observer.observe(item)
        })
    }, 100)
  }

  render() {
    return html`
      <div class="container mx-auto px-6 w-full max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            实施路线图：分阶段稳步推进
          </h2>
          <p class="text-gray-600 text-lg">
            科学规划，稳步实施，确保项目成功落地
          </p>
        </div>

        <!-- 垂直时间线布局 -->
        <div class="flex flex-col">
          ${this.roadmapData.map((item, index) =>
            this.renderTimelineStep(item, index)
          )}
        </div>
      </div>
    `
  }

  toggleDetails(index) {
    // 如果点击的是当前展开的项，则收起
    if (this.expandedIndex === index) {
      this.collapseDetails(index)
      this.expandedIndex = -1
      return
    }

    // 先收起之前展开的项
    if (this.expandedIndex !== -1) {
      this.collapseDetails(this.expandedIndex)
    }

    // 展开新的项
    this.expandDetails(index)
    this.expandedIndex = index
  }

  expandDetails(index) {
    const detailsEl = this.shadowRoot.querySelector(`#details-${index}`)
    detailsEl.classList.add('expanded')
    setTimeout(() => {
      detailsEl.querySelectorAll('.detail-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('show'), i * 100)
      })
    }, 50)
  }

  collapseDetails(index) {
    const detailsEl = this.shadowRoot.querySelector(`#details-${index}`)
    detailsEl.classList.remove('expanded')
    detailsEl.querySelectorAll('.detail-item').forEach((item) => {
      item.classList.remove('show')
    })
  }

  getPhaseColor(phase) {
    const colors = {
      1: 'bg-blue-500',
      2: 'bg-green-500',
      3: 'bg-yellow-500',
      4: 'bg-orange-500',
      5: 'bg-purple-500',
    }
    return colors[phase] || 'bg-gray-500'
  }

  getBorderColor(phase) {
    return this.getPhaseColor(phase).replace('bg-', 'border-')
  }

  getTimelineColors(index) {
    const colors = [
      { from: 'blue-400', to: 'green-400' },
      { from: 'green-400', to: 'yellow-400' },
      { from: 'yellow-400', to: 'orange-400' },
      { from: 'orange-400', to: 'purple-400' },
      { from: 'purple-400', to: 'purple-600' },
    ]
    return colors[index] || { from: 'gray-400', to: 'gray-600' }
  }

  renderTimelineStep(item, index) {
    const isLast = index === this.roadmapData.length - 1

    return html`
      <div class="timeline-step relative flex group">
        <!-- 左侧时间线区域 -->
        <div class="flex-shrink-0 w-32 relative">
          <!-- 时间线段 -->
          ${!isLast
            ? html`
                <div
                  class="absolute left-8 top-6 w-1 h-full bg-blue-300 shadow-sm  transition-all origin-center duration-300 group-hover:w-1.5 group-hover:shadow-lg group-hover:translate-x-[-1/2]"
                ></div>
              `
            : ''}

          <!-- 圆形节点 -->
          <div class="relative z-10 pt-6">
            <div
              class="phase-badge phase-badge-glow absolute left-8 w-12 h-12 ${this.getPhaseColor(
                item.phase
              )} rounded-full border-4 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2"
            >
              <span
                class="text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                >${item.phase}</span
              >
            </div>
          </div>
        </div>

        <!-- 右侧内容卡片 -->
        <div class="flex-1 ${!isLast ? 'pb-8' : ''}">
          ${this.renderContentCard(item, index)}
        </div>
      </div>
    `
  }

  renderContentCard(item, index) {
    return html`
      <div
        class="roadmap-card roadmap-item bg-white rounded-xl shadow-lg border-l-4 ${this.getBorderColor(
          item.phase
        )} cursor-pointer ml-8 transition-all duration-400 ease-out"
        @click="${() => this.toggleDetails(index)}"
      >
        <div class="p-6" style="padding: calc(1.5rem * var(--font-scale, 1))">
          <!-- 卡片头部 -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-4">
              <span class="text-3xl">${item.icon}</span>
              <div>
                <h3 class="font-bold text-xl text-gray-900">${item.title}</h3>
                <p
                  class="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block mt-1"
                >
                  ${item.duration}
                </p>
              </div>
            </div>
            <div
              class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${this
                .expandedIndex === index
                ? 'rotate-180'
                : ''}"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <!-- 描述 -->
          <p class="text-gray-600 mb-4 leading-relaxed text-base">${item.description}</p>

          <!-- 详细内容 -->
          <div id="details-${index}" class="details-list">
            <div class="border-t" style="padding-top: calc(1rem * var(--font-scale, 1)); margin-top: calc(1rem * var(--font-scale, 1))">
              <h5
                class="font-semibold text-gray-800 text-sm flex items-center"
                style="margin-bottom: calc(0.75rem * var(--font-scale, 1))"
              >
                <span
                  class="w-2 h-2 rounded-full ${this.getPhaseColor(
                    item.phase
                  )} mr-2"
                ></span>
                详细内容：
              </h5>
              <ul class="space-y-3" style="gap: calc(0.75rem * var(--font-scale, 1)); display: flex; flex-direction: column">
                ${item.details.map(
                  (detail) => html`
                    <li
                      class="detail-item flex items-start text-sm text-gray-600"
                    >
                      <span
                        class="w-2 h-2 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0"
                      ></span>
                      <span class="leading-relaxed">${detail}</span>
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>

          <!-- 底部提示 -->
          <div class="flex justify-center mt-4 pt-3 border-t border-gray-100">
            <span
              class="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              ${this.expandedIndex === index ? '收起详情' : '展开详情'}
              <svg
                class="w-4 h-4 transition-transform duration-200 ${this
                  .expandedIndex === index
                  ? 'rotate-180'
                  : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('roadmap-component', RoadmapComponent)
