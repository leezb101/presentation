import { html, css } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { BaseComponent } from './base-component.js'

export class RoadmapComponent extends BaseComponent {
  static styles = css`
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

  static properties = {
    expandedIndex: { type: Number },
  }

  constructor() {
    super()
    this.visibleItems = new Set()
    this.expandedIndex = -1
    this.roadmapData = [
      {
        phase: 1,
        duration: '1-3周',
        title: '前期准备阶段',
        description:
          '完成需求调研与目标确认，组建项目团队，为项目顺利启动奠定坚实基础。',
        details: [
          '组织核心用户（建管、监理、施工方）召开需求研讨会，明确核心痛点与项目目标。',
          '完成项目立项，组建包含需求、开发、测试、实施和运维的完整项目组。',
          '规划详细的资源与协作方案，建立高效的沟通机制。',
        ],
        icon: '🎯',
      },
      {
        phase: 2,
        duration: '第4周',
        title: '方案设计阶段',
        description:
          '完成整体技术架构设计和产品原型设计，明确系统边界和核心功能模块。',
        details: [
          '设计“云+三端”的整体技术架构，确保系统的稳定性和可扩展性。',
          '完成App、Web管理端和小程序的核心页面与交互原型（PRD）。',
          '设计数据库结构，明确“一物一码”全生命周期的数据模型。',
        ],
        icon: '📋',
      },
      {
        phase: 3,
        duration: '第5-6周',
        title: '系统功能开发',
        description:
          '采用敏捷开发模式，集中资源在两周内完成核心功能的冲刺开发，快速产出最小可行产品，覆盖市政管网改造业务场景（MVP）。',
        details: [
          '<strong>第一周：</strong>完成后端基础架构、数据库搭建及核心API开发；同步进行Web管理端的基础框架和权限管理模块开发。',
          '<strong>第二周：</strong>集中开发移动App端的核心流程，包括扫码识别、信息录入、流程节点操作等功能。',
        ],
        icon: '⚙️',
      },
      {
        phase: 4,
        duration: '第7-12周',
        title: '测试验证与流程优化',
        description:
          '进行为期一个半月的全面测试，模拟真实使用场景+实际场景试用，保系统稳定可靠，并根据反馈进行优化。',
        details: [
          '开展功能完整性测试，确保数据在“源头-验收-出入库-安装-追溯”各环节的无缝流转。',
          '进行性能与压力测试，模拟多用户并发操作场景。',
          '组织内部多角色（管理、现场）的交叉体验，收集UI/UX优化建议并进行迭代。',
        ],
        icon: '🧪',
      },
      {
        phase: 5,
        duration: '第13-15周',
        title: '小范围试点与培训',
        description:
          '选取1个代表性项目+新兴铸管一个代表厂家，启动小范围试点，收集真实用户反馈，并对相关人员进行系统操作培训。',
        details: [
          '在选定的试点项目中部署生产环境，进行真实数据验证。',
          '与一线操作人员、管理人员紧密沟通，收集操作反馈和改进建议。',
          '组织针对性的用户培训会，确保核心用户能够熟练使用系统。',
        ],
        icon: '🚀',
      },
      {
        phase: 6,
        duration: '长期',
        title: '全面推广与持续运营',
        description:
          '在全公司范围内进行推广应用，并建立常态化运营与技术支持机制，根据实际运营情况持续进行产品迭代与功能扩展。',
        details: [
          '制定详细的推广计划，分批次将系统部署到所有相关项目和部门。',
          '建立标准化的技术支持和问题反馈渠道，保障系统稳定运行。',
          '根据用户在实际使用中提出的新需求，规划并开发新功能模块。',
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

        <div class="flex flex-col pb-16">
          ${this.roadmapData.map((item, index) =>
            this.renderTimelineStep(item, index)
          )}
        </div>
      </div>
    `
  }

  toggleDetails(index) {
    if (this.expandedIndex === index) {
      this.collapseDetails(index)
      this.expandedIndex = -1
      return
    }

    if (this.expandedIndex !== -1) {
      this.collapseDetails(this.expandedIndex)
    }

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
      2: 'bg-indigo-500',
      3: 'bg-green-500',
      4: 'bg-yellow-500',
      5: 'bg-orange-500',
      6: 'bg-purple-500',
    }
    return colors[phase] || 'bg-gray-500'
  }

  getBorderColor(phase) {
    return this.getPhaseColor(phase).replace('bg-', 'border-')
  }

  getTimelineColors(index) {
    const colors = [
      { from: 'blue-400', to: 'indigo-400' },
      { from: 'indigo-400', to: 'green-400' },
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
        <div class="flex-shrink-0 w-32 relative">
          ${!isLast
            ? html`
                <div
                  class="absolute left-8 top-6 w-1 h-full bg-blue-300 shadow-sm  transition-all origin-center duration-300 group-hover:w-1.5 group-hover:shadow-lg group-hover:translate-x-[-1/2]"
                ></div>
              `
            : ''}

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

          <p class="text-gray-600 mb-4 leading-relaxed text-base">
            ${item.description}
          </p>

          <div id="details-${index}" class="details-list">
            <div
              class="border-t"
              style="padding-top: calc(1rem * var(--font-scale, 1)); margin-top: calc(1rem * var(--font-scale, 1))"
            >
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
              <ul
                class="space-y-3"
                style="gap: calc(0.75rem * var(--font-scale, 1)); display: flex; flex-direction: column"
              >
                ${item.details.map(
                  (detail) => html`
                    <li
                      class="detail-item flex items-start text-sm text-gray-600"
                    >
                      <span
                        class="w-2 h-2 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0"
                      ></span>
                      <span class="leading-relaxed">${unsafeHTML(detail)}</span>
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>

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
