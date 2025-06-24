import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { Chart, registerables } from 'chart.js'
import { gsap } from 'gsap'

Chart.register(...registerables)

export class ValueChartComponent extends BaseComponent {
  static properties = {
    chartInitialized: { type: Boolean },
    currentTab: { type: String },
    selectedKPI: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }
    
    /* 字体缩放样式 */
    .text-4xl { font-size: calc(2.25rem * var(--font-scale, 1)) !important; }
    .text-3xl { font-size: calc(1.875rem * var(--font-scale, 1)) !important; }
    .text-2xl { font-size: calc(1.5rem * var(--font-scale, 1)) !important; }
    .text-xl { font-size: calc(1.25rem * var(--font-scale, 1)) !important; }
    .text-lg { font-size: calc(1.125rem * var(--font-scale, 1)) !important; }
    .text-base { font-size: calc(1rem * var(--font-scale, 1)) !important; }
    .text-sm { font-size: calc(0.875rem * var(--font-scale, 1)) !important; }
    .text-xs { font-size: calc(0.75rem * var(--font-scale, 1)) !important; }
    
    @unocss-placeholder;
  `

  constructor() {
    super()
    this.chartInitialized = false
    this.chart = null
    this.currentTab = 'overview' // 'overview', 'material', 'supervision', 'traceability'
    this.selectedKPI = 'efficiency'
  }

  // 获取项目价值数据
  getValueData() {
    return {
      kpiComparison: {
        material: {
          loss: { before: 6, after: 1.5, unit: '%', name: '材料损耗率' },
          accuracy: { before: 75, after: 98, unit: '%', name: '库存准确率' },
          verification: {
            before: 45,
            after: 2,
            unit: '分钟',
            name: '质量验证时间',
          },
        },
        supervision: {
          inspection: {
            before: 3,
            after: 0.5,
            unit: '小时',
            name: '现场巡检时间',
          },
          reporting: {
            before: 24,
            after: 2,
            unit: '小时',
            name: '问题上报时间',
          },
          compliance: { before: 82, after: 96, unit: '%', name: '合规达标率' },
        },
        traceability: {
          query: { before: 48, after: 0.5, unit: '小时', name: '信息查询时间' },
          accuracy: { before: 65, after: 99, unit: '%', name: '追溯准确率' },
          coverage: { before: 30, after: 100, unit: '%', name: '追溯覆盖率' },
        },
      },
      benefits: {
        material: {
          title: '材料管理数字化',
          improvements: [
            { metric: '减少材料浪费', value: '75%', icon: 'mdi:recycle' },
            { metric: '提升库存周转', value: '40%', icon: 'mdi:rotate-right' },
            { metric: '降低采购成本', value: '15%', icon: 'mdi:trending-down' },
            { metric: '提高验收效率', value: '85%', icon: 'mdi:speedometer' },
          ],
          description:
            '通过二维码标识和数字化管理，实现材料全生命周期精准管控，大幅降低损耗和管理成本。',
        },
        supervision: {
          title: '责任人监督智能化',
          improvements: [
            {
              metric: '现场巡检效率',
              value: '83%',
              icon: 'mdi:clipboard-check',
            },
            {
              metric: '问题响应速度',
              value: '92%',
              icon: 'mdi:lightning-bolt',
            },
            { metric: '质量合规率', value: '17%', icon: 'mdi:shield-check' },
            {
              metric: '风险预警准确率',
              value: '95%',
              icon: 'mdi:alert-circle',
            },
          ],
          description:
            '建立四方责任人实时监督体系，通过数字化手段强化质量管控和风险防范。',
        },
        traceability: {
          title: '追溯信息流程优化',
          improvements: [
            { metric: '信息查询速度', value: '99%', icon: 'mdi:magnify' },
            { metric: '数据完整性', value: '35%', icon: 'mdi:database' },
            {
              metric: '问题定位精度',
              value: '90%',
              icon: 'mdi:crosshairs-gps',
            },
            { metric: '档案管理效率', value: '70%', icon: 'mdi:file-document' },
          ],
          description:
            '构建完整的信息追溯链条，实现从源头到末端的全过程可追溯，提升质量管理水平。',
        },
      },
      realWorldImpact: [
        {
          scenario: '材料质量事故处理',
          before:
            '传统模式下，发现质量问题后需要人工翻找纸质档案，联系多方确认，平均耗时2-3天',
          after:
            '数字化平台可在5分钟内定位问题材料批次、供应商信息和责任人，快速启动处置流程',
          improvement: '效率提升99%',
          icon: 'mdi:alert-octagon',
        },
        {
          scenario: '项目验收审计',
          before:
            '需要收集整理大量纸质资料，验收人员逐一核对，容易出现遗漏和错误',
          after:
            '所有材料信息自动归档，一键生成验收报告，审计人员可随时查询核实',
          improvement: '准确率提升35%',
          icon: 'mdi:file-check',
        },
        {
          scenario: '供应商管理决策',
          before: '依靠经验判断供应商表现，缺乏客观数据支撑，决策风险较高',
          after: '基于历史数据自动生成供应商评价报告，为采购决策提供科学依据',
          improvement: '决策准确率提升60%',
          icon: 'mdi:handshake',
        },
      ],
    }
  }

  render() {
    const data = this.getValueData()

    return html`
      <div class="w-full flex flex-col items-center">
        <!-- 标题区域 -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            项目价值：精准量化的数字化成效
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            基于深入的前期调研，聚焦材料管理、责任人监督、追溯信息流程三大核心领域，实现可衡量、可持续的管理提升
          </p>
        </div>

        <!-- 标签页导航 -->
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

        <!-- 内容区域 -->
        <div class="w-full max-w-7xl">
          ${this.currentTab === 'overview'
            ? this.renderOverviewTab()
            : this.currentTab === 'material'
            ? this.renderMaterialTab()
            : this.currentTab === 'supervision'
            ? this.renderSupervisionTab()
            : this.renderTraceabilityTab()}
        </div>
      </div>
    `
  }

  // 渲染价值总览标签页
  renderOverviewTab() {
    const data = this.getValueData()

    return html`
      <div class="space-y-8">
        <!-- 对比分析图表区域 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            整体效益对比分析
          </h3>
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="chart-container mb-6" style="height: 400px;">
                <canvas id="overviewChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-6">
              ${data.realWorldImpact.map(
                (impact) => html`
                  <div
                    class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
                  >
                    <div class="flex items-start mb-4">
                      <div
                        class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4"
                      >
                        <iconify-icon
                          icon="${impact.icon}"
                          class="text-2xl text-white"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-2">
                          ${impact.scenario}
                        </h4>
                        <div
                          class="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full inline-block"
                        >
                          ${impact.improvement}
                        </div>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4 text-sm">
                      <div
                        class="bg-red-50 rounded-lg p-4 border-l-4 border-red-400"
                      >
                        <div class="font-medium text-red-800 mb-2">
                          传统模式
                        </div>
                        <div class="text-gray-700">${impact.before}</div>
                      </div>
                      <div
                        class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
                      >
                        <div class="font-medium text-green-800 mb-2">
                          数字化平台
                        </div>
                        <div class="text-gray-700">${impact.after}</div>
                      </div>
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>

        <!-- 三大核心领域价值展示 -->
        <div class="grid lg:grid-cols-3 gap-8">
          ${Object.entries(data.benefits).map(([key, benefit]) => {
            const colors = {
              material: 'blue',
              supervision: 'green',
              traceability: 'purple',
            }
            const color = colors[key]

            return html`
              <div
                class="bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-2xl p-6 border border-${color}-200 hover:shadow-lg transition-all duration-300"
              >
                <h4 class="text-xl font-bold text-gray-800 mb-4 text-center">
                  ${benefit.title}
                </h4>
                <div class="grid grid-cols-2 gap-3 mb-6">
                  ${benefit.improvements.map(
                    (improvement) => html`
                      <div
                        class="text-center bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div
                          class="w-10 h-10 bg-${color}-500 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <iconify-icon
                            icon="${improvement.icon}"
                            class="text-lg text-white"
                          ></iconify-icon>
                        </div>
                        <div class="text-xl font-bold text-${color}-600">
                          ${improvement.value}
                        </div>
                        <div class="text-xs text-gray-600 leading-tight">
                          ${improvement.metric}
                        </div>
                      </div>
                    `
                  )}
                </div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  ${benefit.description}
                </p>
              </div>
            `
          })}
        </div>
      </div>
    `
  }

  // 渲染材料管理标签页
  renderMaterialTab() {
    const data = this.getValueData()
    const materialData = data.kpiComparison.material

    return html`
      <div class="space-y-8">
        <!-- KPI对比图表 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            材料管理KPI对比
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas id="materialChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(materialData).map(([key, kpi]) => {
                const improvement =
                  key === 'verification'
                    ? Math.round((1 - kpi.after / kpi.before) * 100)
                    : Math.round(((kpi.after - kpi.before) / kpi.before) * 100)
                const isPositive = improvement > 0

                return html`
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${kpi.name}</span>
                      <span
                        class="text-sm font-bold ${isPositive
                          ? 'text-green-600'
                          : 'text-red-600'}"
                      >
                        ${isPositive ? '+' : ''}${improvement}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${kpi.before}${kpi.unit}</span>
                      <span>改善后：${kpi.after}${kpi.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-blue-500 h-2 rounded-full"
                        style="width: ${Math.min(improvement, 100)}%"
                      ></div>
                    </div>
                  </div>
                `
              })}
            </div>
          </div>
        </div>

        <!-- 材料管理流程优化 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            材料管理流程数字化改造
          </h3>
          <div class="grid md:grid-cols-4 gap-6">
            ${[
              {
                step: '采购入库',
                icon: 'mdi:truck-delivery',
                improvement: '自动生成二维码，关联供应商和质量证书',
              },
              {
                step: '库存管理',
                icon: 'mdi:warehouse',
                improvement: '实时库存监控，智能预警补货',
              },
              {
                step: '现场验收',
                icon: 'mdi:clipboard-check',
                improvement: '扫码快速验证，移动端记录问题',
              },
              {
                step: '使用追踪',
                icon: 'mdi:map-marker-path',
                improvement: '全程使用轨迹，责任人实时可查',
              },
            ].map(
              (process, index) => html`
                <div class="text-center">
                  <div class="relative mb-4">
                    <div
                      class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto"
                    >
                      <iconify-icon
                        icon="${process.icon}"
                        class="text-2xl text-white"
                      ></iconify-icon>
                    </div>
                    <div
                      class="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    >
                      ${index + 1}
                    </div>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">${process.step}</h4>
                  <p class="text-sm text-gray-600">${process.improvement}</p>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `
  }

  // 渲染责任监督标签页
  renderSupervisionTab() {
    const data = this.getValueData()
    const supervisionData = data.kpiComparison.supervision

    return html`
      <div class="space-y-8">
        <!-- 监督体系架构 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            四方责任监督体系
          </h3>
          <div class="relative">
            <!-- 四方监督关系图 -->
            <div class="flex items-center justify-center mb-8">
              <div class="relative w-full max-w-5xl h-[450px]">
                <!-- 四个角落的参与方 -->
                <!-- 建设方 -->
                <div
                  class="absolute text-center z-10"
                  style="top: 5%; left: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:account-tie"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">建设方</h4>
                  <p class="text-xs text-gray-600">项目业主</p>
                </div>

                <!-- 建管部 -->
                <div
                  class="absolute text-center z-10"
                  style="top: 5%; right: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:domain"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">建管部</h4>
                  <p class="text-xs text-gray-600">建设管理</p>
                </div>

                <!-- 监理公司 -->
                <div
                  class="absolute text-center z-10"
                  style="bottom: 5%; left: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:shield-check"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">监理公司</h4>
                  <p class="text-xs text-gray-600">质量监督</p>
                </div>

                <!-- 施工方 -->
                <div
                  class="absolute text-center z-10"
                  style="bottom: 5%; right: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:hard-hat"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">施工方</h4>
                  <p class="text-xs text-gray-600">工程实施</p>
                </div>

                <!-- 中心数字化平台 -->
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div
                    class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <iconify-icon
                      icon="mdi:monitor-dashboard"
                      class="text-3xl text-white"
                    ></iconify-icon>
                  </div>
                  <p class="text-sm font-bold text-gray-800 text-center mt-2">
                    数字化平台
                  </p>
                  <p class="text-xs text-gray-600 text-center">统一协调中心</p>
                </div>

                <!-- 连接线 -->
                <svg
                  class="absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  <!-- 四个角到中心的连线 -->
                  <!-- 建设方到中心 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 建管部到中心 -->
                  <line
                    x1="84%"
                    y1="20%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 监理公司到中心 -->
                  <line
                    x1="16%"
                    y1="80%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 施工方到中心 -->
                  <line
                    x1="84%"
                    y1="80%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />

                  <!-- 上方两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="84%"
                    y2="20%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 下方两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="80%"
                    x2="84%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 左侧两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="16%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 右侧两个角之间的连线 -->
                  <line
                    x1="84%"
                    y1="20%"
                    x2="84%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                </svg>
              </div>
            </div>

            <!-- 协作关系说明 -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              ${[
                {
                  role: '建设方',
                  responsibilities: [
                    '项目投资决策',
                    '总体目标制定',
                    '资源配置统筹',
                  ],
                },
                {
                  role: '建管部',
                  responsibilities: [
                    '建设过程管理',
                    '进度质量控制',
                    '协调各方关系',
                  ],
                },
                {
                  role: '监理公司',
                  responsibilities: [
                    '质量安全监督',
                    '合规性检查',
                    '问题处理协调',
                  ],
                },
                {
                  role: '施工方',
                  responsibilities: [
                    '工程具体实施',
                    '材料使用管理',
                    '施工质量保证',
                  ],
                },
              ].map(
                (item) => html`
                  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-gray-800 mb-3 text-center">
                      ${item.role}
                    </h5>
                    <div class="space-y-2">
                      ${item.responsibilities.map(
                        (resp) => html`
                          <div class="text-sm text-gray-600 flex items-center">
                            <div
                              class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"
                            ></div>
                            ${resp}
                          </div>
                        `
                      )}
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>

        <!-- KPI提升情况 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            责任监督KPI提升
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas id="supervisionChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(supervisionData).map(([key, kpi]) => {
                const improvement =
                  key === 'inspection' || key === 'reporting'
                    ? Math.round((1 - kpi.after / kpi.before) * 100)
                    : Math.round(((kpi.after - kpi.before) / kpi.before) * 100)
                const isPositive = improvement > 0

                return html`
                  <div
                    class="bg-green-50 rounded-lg p-4 border border-green-200"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${kpi.name}</span>
                      <span
                        class="text-sm font-bold ${isPositive
                          ? 'text-green-600'
                          : 'text-red-600'}"
                      >
                        ${isPositive ? '+' : ''}${improvement}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${kpi.before}${kpi.unit}</span>
                      <span>改善后：${kpi.after}${kpi.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-green-500 h-2 rounded-full"
                        style="width: ${Math.min(improvement, 100)}%"
                      ></div>
                    </div>
                  </div>
                `
              })}
            </div>
          </div>
        </div>
      </div>
    `
  }

  // 渲染追溯流程标签页
  renderTraceabilityTab() {
    const data = this.getValueData()
    const traceabilityData = data.kpiComparison.traceability

    return html`
      <div class="space-y-8">
        <!-- 追溯流程展示 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            全过程追溯信息流
          </h3>
          <div class="relative">
            <!-- 追溯流程时间线 -->
            <div class="flex items-center justify-between relative">
              ${[
                {
                  phase: '采购源头',
                  icon: 'mdi:factory',
                  data: ['供应商信息', '质量证书', '检验报告'],
                },
                {
                  phase: '入库存储',
                  icon: 'mdi:warehouse',
                  data: ['入库时间', '存储位置', '质量状态'],
                },
                {
                  phase: '现场使用',
                  icon: 'mdi:construction',
                  data: ['使用位置', '安装人员', '施工记录'],
                },
                {
                  phase: '验收归档',
                  icon: 'mdi:file-check',
                  data: ['验收结果', '质量评定', '档案归档'],
                },
              ].map(
                (step, index) => html`
                  <div class="text-center flex-1">
                    <div class="relative mb-4">
                      <div
                        class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto"
                      >
                        <iconify-icon
                          icon="${step.icon}"
                          class="text-2xl text-white"
                        ></iconify-icon>
                      </div>
                      ${index < 3
                        ? html`
                            <div
                              class="absolute z-[-1] top-8 left-1/2 w-full h-0.5 bg-purple-300 transform -translate-y-1/2"
                            ></div>
                          `
                        : ''}
                    </div>
                    <h4 class="font-bold text-gray-800 mb-3">${step.phase}</h4>
                    <div class="space-y-1">
                      ${step.data.map(
                        (item) => html`
                          <div
                            class="text-sm text-gray-600 bg-purple-50 rounded px-2 py-1"
                          >
                            ${item}
                          </div>
                        `
                      )}
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>

        <!-- KPI对比 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            追溯效率KPI对比
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas
                  id="traceabilityChart"
                  width="400"
                  height="300"
                ></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(traceabilityData).map(([key, kpi]) => {
                const improvement =
                  key === 'query'
                    ? Math.round((1 - kpi.after / kpi.before) * 100)
                    : Math.round(((kpi.after - kpi.before) / kpi.before) * 100)
                const isPositive = improvement > 0

                return html`
                  <div
                    class="bg-purple-50 rounded-lg p-4 border border-purple-200"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${kpi.name}</span>
                      <span
                        class="text-sm font-bold ${isPositive
                          ? 'text-green-600'
                          : 'text-red-600'}"
                      >
                        ${isPositive ? '+' : ''}${improvement}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${kpi.before}${kpi.unit}</span>
                      <span>改善后：${kpi.after}${kpi.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-purple-500 h-2 rounded-full"
                        style="width: ${Math.min(improvement, 100)}%"
                      ></div>
                    </div>
                  </div>
                `
              })}
            </div>
          </div>
        </div>
      </div>
    `
  }

  // 切换标签页
  switchTab(tab) {
    if (this.currentTab === tab) return
    this.currentTab = tab
    this.requestUpdate()

    // 等待DOM更新后初始化对应的图表
    this.safeRequestAnimationFrame(() => {
      this.initializeCharts()
    })
  }

  firstUpdated() {
    this.initializeCharts()
    this.initializeAnimations()
  }

  // 初始化动画
  initializeAnimations() {
    const cards = this.shadowRoot.querySelectorAll(
      '.bg-white, .bg-gradient-to-r, .bg-gradient-to-br'
    )
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    )
  }

  // 初始化图表
  initializeCharts() {
    // 根据当前标签页初始化对应图表
    this.safeRequestAnimationFrame(() => {
      if (this.currentTab === 'overview') {
        this.initializeOverviewChart()
      } else if (this.currentTab === 'material') {
        this.initializeMaterialChart()
      } else if (this.currentTab === 'supervision') {
        this.initializeSupervisionChart()
      } else if (this.currentTab === 'traceability') {
        this.initializeTraceabilityChart()
      }
    })
  }

  initializeOverviewChart() {
    const canvas = this.shadowRoot.querySelector('#overviewChart')
    if (!canvas) return

    if (this.overviewChart) {
      this.overviewChart.destroy()
    }

    const chartData = {
      labels: ['材料损耗率(%)', '质量追溯时间(小时)', '协同成本指数'],
      datasets: [
        {
          label: '传统模式',
          data: [6, 48, 100],
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 2,
        },
        {
          label: '数字化平台',
          data: [1.5, 0.5, 40],
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 2,
        },
      ],
    }

    this.overviewChart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: this.getChartOptions('整体效益对比'),
    })
  }

  initializeMaterialChart() {
    const canvas = this.shadowRoot.querySelector('#materialChart')
    if (!canvas) return

    if (this.materialChart) {
      this.materialChart.destroy()
    }

    const data = this.getValueData().kpiComparison.material
    const chartData = {
      labels: Object.values(data).map((kpi) => kpi.name),
      datasets: [
        {
          label: '改善前',
          data: Object.values(data).map((kpi) => kpi.before),
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 2,
        },
        {
          label: '改善后',
          data: Object.values(data).map((kpi) => kpi.after),
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 2,
        },
      ],
    }

    this.materialChart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: this.getChartOptions('材料管理KPI对比'),
    })
  }

  initializeSupervisionChart() {
    const canvas = this.shadowRoot.querySelector('#supervisionChart')
    if (!canvas) return

    if (this.supervisionChart) {
      this.supervisionChart.destroy()
    }

    const data = this.getValueData().kpiComparison.supervision
    const chartData = {
      labels: Object.values(data).map((kpi) => kpi.name),
      datasets: [
        {
          label: '改善前',
          data: Object.values(data).map((kpi) => kpi.before),
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 2,
        },
        {
          label: '改善后',
          data: Object.values(data).map((kpi) => kpi.after),
          backgroundColor: 'rgba(34, 197, 94, 0.7)',
          borderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 2,
        },
      ],
    }

    this.supervisionChart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: this.getChartOptions('责任监督KPI对比'),
    })
  }

  initializeTraceabilityChart() {
    const canvas = this.shadowRoot.querySelector('#traceabilityChart')
    if (!canvas) return

    if (this.traceabilityChart) {
      this.traceabilityChart.destroy()
    }

    const data = this.getValueData().kpiComparison.traceability
    const chartData = {
      labels: Object.values(data).map((kpi) => kpi.name),
      datasets: [
        {
          label: '改善前',
          data: Object.values(data).map((kpi) => kpi.before),
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 2,
        },
        {
          label: '改善后',
          data: Object.values(data).map((kpi) => kpi.after),
          backgroundColor: 'rgba(147, 51, 234, 0.7)',
          borderColor: 'rgba(147, 51, 234, 1)',
          borderWidth: 2,
        },
      ],
    }

    this.traceabilityChart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: this.getChartOptions('追溯效率KPI对比'),
    })
  }

  getChartOptions(title) {
    return {
      animation: {
        duration: 1500,
        easing: 'easeInOutQuart',
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14,
              weight: 'bold',
            },
            padding: 20,
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleFont: {
            size: 14,
            weight: 'bold',
          },
          bodyFont: {
            size: 13,
          },
        },
      },
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('currentTab')) {
      this.safeRequestAnimationFrame(() => {
        this.initializeAnimations()
      })
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.overviewChart) {
      this.overviewChart.destroy()
      this.overviewChart = null
    }
    if (this.materialChart) {
      this.materialChart.destroy()
      this.materialChart = null
    }
    if (this.supervisionChart) {
      this.supervisionChart.destroy()
      this.supervisionChart = null
    }
    if (this.traceabilityChart) {
      this.traceabilityChart.destroy()
      this.traceabilityChart = null
    }
  }
}

customElements.define('value-chart-component', ValueChartComponent)
