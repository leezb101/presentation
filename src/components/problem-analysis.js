import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class ProblemAnalysisComponent extends BaseComponent {
  static properties = {
    currentView: { type: String },
  }

  static styles = css`
    @unocss-placeholder;
  `

  constructor() {
    super()
    this.currentView = 'status' // 'status' or 'painpoints'
  }

  firstUpdated() {
    this.safeRequestAnimationFrame(() => {
      if (this.currentView === 'status') {
        this.initializeStatusAnimations()
      } else if (this.currentView === 'painpoints') {
        this.initializePainPointsAnimations()
      }
    })
  }

  // 行业现状数据展示
  renderStatusView() {
    const statusData = [
      {
        title: '物料追溯效率',
        current: 25,
        target: 90,
        unit: '%',
        icon: 'mdi:magnify-scan',
        color: '#ef4444',
        desc: '传统人工核验，数字化程度低',
        source: '2024年建设工程数字化管理调研报告',
        needSource: true,
      },
      {
        title: '物料浪费率',
        current: 8,
        target: 2,
        unit: '%',
        icon: 'mdi:delete-variant',
        color: '#f59e0b',
        desc: '标准损耗率超标，粗放管理',
        source: '建筑工程材料损耗率标准及行业统计',
        needSource: true,
      },
      {
        title: '信息准确性',
        current: 72,
        target: 95,
        unit: '%',
        icon: 'mdi:chart-line',
        color: '#3b82f6',
        desc: '人工记录错误率高，信息孤岛严重',
        source: '工程项目数据质量管理报告（2024）',
        needSource: true,
      },
      {
        title: '协同响应时间',
        current: 36,
        target: 4,
        unit: '小时',
        icon: 'mdi:clock-outline',
        color: '#8b5cf6',
        desc: '多方沟通效率低下，流程冗长',
        source: '工程项目协同效率分析报告（2023-2024）',
        needSource: true,
      },
    ]

    return html`
      <div
        class="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl w-full animate-fadeIn"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">
            行业现状：数字化管理亟待突破
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            基于2023-2024年水务工程建设行业调研和权威统计数据，传统物料管理模式在数字化转型中面临的核心挑战。
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          ${statusData.map(
            (item, idx) => html`
              <div
                class="status-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-500"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style="background: ${item.color}20; border: 2px solid ${item.color}40;"
                >
                  <iconify-icon
                    icon="${item.icon}"
                    class="text-3xl"
                    style="color: ${item.color};"
                  ></iconify-icon>
                </div>
                <h4 class="text-lg font-bold text-gray-800 mb-2 text-center flex items-center justify-center gap-2">
                  ${item.title}
                  ${item.needSource ? html`
                    <div class="relative group">
                      <iconify-icon
                        icon="mdi:help-circle-outline"
                        class="text-sm text-gray-400 hover:text-gray-600 cursor-help"
                      ></iconify-icon>
                      <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                        数据来源：${item.source}
                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </div>
                  ` : ''}
                </h4>
                <div class="text-center mb-3">
                  <div
                    class="text-3xl font-bold mb-1"
                    style="color: ${item.color};"
                  >
                    <span class="status-number" data-target="${item.current}"
                      >0</span
                    >${item.unit}
                  </div>
                  <div class="text-sm text-gray-500">当前水平</div>
                </div>
                <p class="text-xs text-gray-600 text-center leading-relaxed">
                  ${item.desc}
                </p>

                <!-- 进度条 -->
                <div class="mt-4">
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>现状</span>
                    <span>目标</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="status-progress-bar h-2 rounded-full transition-all duration-1000 ease-out"
                      style="width: 0%; background: linear-gradient(90deg, ${item.color}80, ${item.color});"
                      data-width="${(item.current /
                        Math.max(item.current, item.target)) *
                      100}%"
                    ></div>
                  </div>
                </div>
              </div>
            `
          )}
        </div>

        <!-- 行业对比图表 -->
        <div
          class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
        >
          <h4 class="text-xl font-bold text-gray-800 mb-6 text-center">
            水务行业数字化现状对比
          </h4>
          <div class="flex items-end justify-center space-x-8 h-48">
            ${[
              { label: '传统管理', value: 35, color: '#ef4444' },
              { label: '半数字化', value: 50, color: '#f59e0b' },
              { label: '全数字化', value: 15, color: '#10b981' },
            ].map(
              (bar, idx) => html`
                <div class="flex flex-col items-center">
                  <div class="text-sm font-medium text-gray-700 mb-2">
                    ${bar.value}%
                  </div>
                  <div
                    class="industry-bar w-16 rounded-t-lg transition-all duration-1000 ease-out"
                    style="height: 0px; background: ${bar.color}; max-height: ${bar.value *
                    1.6}px;"
                    data-height="${bar.value * 1.6}px"
                  ></div>
                  <div class="text-xs text-gray-600 mt-2 text-center">
                    ${bar.label}
                  </div>
                </div>
              `
            )}
          </div>
          <p class="text-sm text-gray-600 text-center mt-4">
            数据来源：全国数字经济发展竞争力评价报告（2023）、水务行业数字化现状调研
          </p>
        </div>
      </div>
    `
  }

  // 痛点问题可视化展示
  renderPainPointsView() {
    const painPoints = [
      {
        title: '信息孤岛',
        icon: 'mdi:island',
        color: '#ef4444',
        problems: [
          '建设方信息不透明',
          '施工方数据缺失',
          '监理方监管盲区',
          '供应商追溯断链',
        ],
        impact: '协同效率降低45%',
        source: '工程项目数字化管理白皮书（2024）',
        needSource: true,
        animation: 'islands',
      },
      {
        title: '追溯困难',
        icon: 'mdi:magnify-scan',
        color: '#f59e0b',
        problems: [
          '批次信息混乱',
          '质检报告丢失',
          '责任界定模糊',
          '问题定位耗时',
        ],
        impact: '问题定位时间增长3-4倍',
        source: '建筑工程质量追溯效率分析报告',
        needSource: true,
        animation: 'tracing',
      },
      {
        title: '资源浪费',
        icon: 'mdi:delete-variant',
        color: '#8b5cf6',
        problems: ['重复采购', '过度储备', '丢失损耗', '过期报废'],
        impact: '建筑垃圾产量超34.8亿吨/年',
        source: '中国建筑垃圾处理行业发展报告（2023）',
        needSource: true,
        animation: 'waste',
      },
    ]

    return html`
      <div
        class="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl w-full animate-fadeIn"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-red-600 mb-4">
            核心痛点：传统管理的三大顽疾
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            深入分析传统物料管理模式的根本问题，这些痛点不仅影响工程质量，更制约着行业的数字化转型进程。
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          ${painPoints.map(
            (point, idx) => html`
              <div
                class="painpoint-card bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100 hover:border-red-200 transition-all duration-500 hover:shadow-xl"
              >
                <div class="text-center mb-6">
                  <div
                    class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                    style="background: ${point.color}20; border: 3px solid ${point.color}40;"
                  >
                    <iconify-icon
                      icon="${point.icon}"
                      class="text-4xl"
                      style="color: ${point.color};"
                    ></iconify-icon>
                  </div>
                  <h4 class="text-2xl font-bold text-gray-800 mb-2">
                    ${point.title}
                  </h4>
                  <div
                    class="text-sm font-medium px-3 py-1 rounded-full inline-block flex items-center gap-2"
                    style="background: ${point.color}20; color: ${point.color};"
                  >
                    ${point.impact}
                    ${point.needSource ? html`
                      <div class="relative group">
                        <iconify-icon
                          icon="mdi:help-circle-outline"
                          class="text-xs opacity-70 hover:opacity-100 cursor-help"
                        ></iconify-icon>
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          数据来源：${point.source}
                          <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                </div>

                <div class="space-y-3">
                  ${point.problems.map(
                    (problem, problemIdx) => html`
                      <div
                        class="problem-item flex items-center p-3 bg-white rounded-lg border border-gray-100 transform translate-x-4 opacity-0"
                        style="animation-delay: ${idx * 0.5 +
                        problemIdx * 0.1}s;"
                      >
                        <div
                          class="w-2 h-2 rounded-full mr-3"
                          style="background: ${point.color};"
                        ></div>
                        <span class="text-gray-700 text-sm">${problem}</span>
                      </div>
                    `
                  )}
                </div>

                <!-- 动画演示区域 -->
                <div
                  class="mt-6 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl relative overflow-hidden"
                >
                  <div class="${point.animation}-demo w-full h-full relative">
                    ${point.animation === 'islands'
                      ? html`
                          <!-- 信息孤岛动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-around"
                          >
                            ${Array(4)
                              .fill(0)
                              .map(
                                (_, i) => html`
                                  <div
                                    class="island w-8 h-8 bg-red-400 rounded-full opacity-60 animate-pulse"
                                    style="animation-delay: ${i * 0.3}s;"
                                  ></div>
                                `
                              )}
                          </div>
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              信息割裂
                            </div>
                          </div>
                        `
                      : point.animation === 'tracing'
                      ? html`
                          <!-- 追溯困难动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="trace-path relative w-16 h-4">
                              <div
                                class="absolute inset-0 bg-gray-300 rounded-full"
                              ></div>
                              <div
                                class="trace-dot absolute w-4 h-4 bg-orange-400 rounded-full -top-0 animate-bounce"
                              ></div>
                            </div>
                          </div>
                          <div
                            class="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              追溯中断
                            </div>
                          </div>
                        `
                      : html`
                          <!-- 资源浪费动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-around"
                          >
                            ${Array(3)
                              .fill(0)
                              .map(
                                (_, i) => html`
                                  <div
                                    class="waste-item w-6 h-6 bg-purple-400 rounded opacity-80 animate-pulse"
                                    style="animation-delay: ${i * 0.4}s;"
                                  ></div>
                                `
                              )}
                          </div>
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              资源浪费
                            </div>
                          </div>
                        `}
                  </div>
                </div>
              </div>
            `
          )}
        </div>

        <!-- 经济影响统计 -->
        <div
          class="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100"
        >
          <h4 class="text-xl font-bold text-gray-800 mb-6 text-center">
            传统管理模式的经济影响
          </h4>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            ${[
              {
                label: '额外成本',
                value: '10-15%',
                icon: 'mdi:currency-usd',
                color: '#ef4444',
                source: '工程建设成本控制分析报告（2024）',
                needSource: true,
              },
              {
                label: '时间损失',
                value: '25-35%',
                icon: 'mdi:clock-outline',
                color: '#f59e0b',
                source: '项目管理效率提升研究报告（2024）',
                needSource: true,
              },
              {
                label: '人力浪费',
                value: '20-30%',
                icon: 'mdi:account-group',
                color: '#8b5cf6',
                source: '数字化转型人力效率报告（2023）',
                needSource: true,
              },
              {
                label: '资源化利用率',
                value: '<5%',
                icon: 'mdi:recycle',
                color: '#06b6d4',
                source: '中国建筑垃圾资源化利用现状报告',
                needSource: true,
              },
            ].map(
              (stat) => html`
                <div class="text-center">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-3"
                    style="background: ${stat.color}20; border: 2px solid ${stat.color}40;"
                  >
                    <iconify-icon
                      icon="${stat.icon}"
                      class="text-2xl"
                      style="color: ${stat.color};"
                    ></iconify-icon>
                  </div>
                  <div
                    class="text-2xl font-bold mb-1 flex items-center justify-center gap-1"
                    style="color: ${stat.color};"
                  >
                    ${stat.value}
                    ${stat.needSource ? html`
                      <div class="relative group">
                        <iconify-icon
                          icon="mdi:help-circle-outline"
                          class="text-sm opacity-60 hover:opacity-100 cursor-help"
                        ></iconify-icon>
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          数据来源：${stat.source}
                          <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                  <div class="text-sm text-gray-600">${stat.label}</div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `
  }

  // 初始化现状数据动画
  initializeStatusAnimations() {
    // 数字递增动画
    const numberElements = this.shadowRoot.querySelectorAll('.status-number')
    numberElements.forEach((el) => {
      const target = parseInt(el.dataset.target)
      gsap.fromTo(
        el,
        {
          innerHTML: 0,
        },
        {
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function () {
            el.innerHTML = Math.ceil(el.innerHTML)
          },
        }
      )
    })

    // 进度条动画
    const progressBars = this.shadowRoot.querySelectorAll(
      '.status-progress-bar'
    )
    progressBars.forEach((bar) => {
      const targetWidth = bar.dataset.width
      gsap.to(bar, {
        width: targetWidth,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
      })
    })

    // 柱状图动画
    const industryBars = this.shadowRoot.querySelectorAll('.industry-bar')
    industryBars.forEach((bar) => {
      const targetHeight = bar.dataset.height
      gsap.to(bar, {
        height: targetHeight,
        duration: 1.2,
        ease: 'back.out(1.7)',
        delay: 1,
      })
    })
  }

  // 初始化痛点动画
  initializePainPointsAnimations() {
    // 问题项目逐个显示
    const problemItems = this.shadowRoot.querySelectorAll('.problem-item')
    gsap.fromTo(
      problemItems,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }
    )

    // 痛点卡片入场动画
    const painPointCards = this.shadowRoot.querySelectorAll('.painpoint-card')
    gsap.fromTo(
      painPointCards,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      }
    )

    // 信息孤岛特效
    this.initializeIslandAnimation()
    // 追溯断链特效
    this.initializeTracingAnimation()
    // 资源浪费特效
    this.initializeWasteAnimation()
  }

  // 信息孤岛动画
  initializeIslandAnimation() {
    const islands = this.shadowRoot.querySelectorAll('.island')
    if (islands.length > 0) {
      // 孤岛分离效果
      gsap.to(islands, {
        scale: 0.8,
        opacity: 0.4,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
        ease: 'power2.inOut',
      })

      // 模拟信息传递中断
      gsap.to(islands, {
        x: 'random(-10, 10)',
        y: 'random(-5, 5)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.4,
      })
    }
  }

  // 追溯断链动画
  initializeTracingAnimation() {
    const traceDots = this.shadowRoot.querySelectorAll('.trace-dot')
    traceDots.forEach((dot) => {
      // 追溯点移动动画
      gsap.to(dot, {
        x: 40,
        duration: 1.5,
        ease: 'power2.out',
        repeat: -1,
        yoyo: true,
        onComplete: () => {
          // 模拟追溯失败
          gsap.to(dot, {
            opacity: 0.3,
            scale: 0.5,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          })
        },
      })
    })
  }

  // 资源浪费动画
  initializeWasteAnimation() {
    const wasteItems = this.shadowRoot.querySelectorAll('.waste-item')
    wasteItems.forEach((item, idx) => {
      // 模拟资源浪费过程
      gsap.to(item, {
        opacity: 0.2,
        scale: 0.3,
        duration: 1.5,
        delay: idx * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })

      // 随机消失效果
      gsap.to(item, {
        x: 'random(-20, 20)',
        y: 'random(-10, 10)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: idx * 0.5,
      })
    })
  }

  switchView(view) {
    this.currentView = view
    this.requestUpdate()
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('currentView')) {
      this.safeRequestAnimationFrame(() => {
        if (this.currentView === 'status') {
          this.initializeStatusAnimations()
        } else if (this.currentView === 'painpoints') {
          this.initializePainPointsAnimations()
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

  render() {
    return html`
      <div class="w-full flex flex-col items-center relative">
        <div class="text-center mb-8 z-10 relative">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            ${this.currentView === 'status' ? '行业现状分析' : '核心痛点分析'}
          </h2>
          <p class="text-lg text-gray-400 max-w-xl mx-auto">
            ${this.currentView === 'status'
              ? '深入调研传统管理模式，量化分析数字化转型的紧迫性'
              : '系统性分析传统管理的核心痛点，明确数字化转型的关键需求'}
          </p>
        </div>

        <div
          class="w-full max-w-7xl flex items-start justify-center relative"
        >
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full"
            style="display: ${this.currentView === 'status' ? 'flex' : 'none'};"
          >
            ${this.renderStatusView()}
          </div>
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full"
            style="display: ${this.currentView === 'painpoints'
              ? 'flex'
              : 'none'};"
          >
            ${this.renderPainPointsView()}
          </div>
        </div>

        <!-- 切换按钮 -->
        <div class="flex gap-4 justify-center mt-8 z-20">
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this
              .currentView === 'status'
              ? 'bg-blue-500 text-white shadow-blue-200'
              : 'bg-white/80 text-slate-700'}"
            @click=${() => this.switchView('status')}
          >
            行业现状
          </button>
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this
              .currentView === 'painpoints'
              ? 'bg-red-500 text-white shadow-red-200'
              : 'bg-white/80 text-slate-700'}"
            @click=${() => this.switchView('painpoints')}
          >
            核心痛点
          </button>
        </div>
      </div>
    `
  }
}

customElements.define('problem-analysis', ProblemAnalysisComponent)
