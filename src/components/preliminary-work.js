import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'
import xianchang_01 from '../images/xianchang_01.jpg'
import xianchang_02 from '../images/xianchang_02.jpg'
import xianchangguanjian_01 from '../images/xianchangguanjian_01.jpg'
import guanjianxinxi_01 from '../images/guanjianxinxi_01.png'
import xianshang_01 from '../images/xianshang_01.png'

export class PreliminaryWorkComponent extends BaseComponent {
  static properties = {
    currentTab: { type: String },
    selectedPhotoIndex: { type: Number },
  }

  static styles = css`
    @unocss-placeholder;
  `

  constructor() {
    super()
    this.currentTab = 'overview' // 'overview', 'survey', 'photos', 'results'
    this.selectedPhotoIndex = 0
  }

  firstUpdated() {
    this.safeRequestAnimationFrame(() => {
      this.initializeAnimations()
    })
  }

  // 调研数据
  getSurveyData() {
    return {
      fieldWork: {
        project: '老旧管网改造项目',
        location: '兴盛街（郑州图书馆）路段管网现场',
        duration: '3周',
        focus: '管材管理、施工流程、质量控制、各方关注点',
        personNum: 9,
        participants: ['建管部', '监理工程师', '施工项目经理', '系统技术人员'],
        findings: [
          '管材规格各异，源头多样，现场识别繁琐',
          '质量材料纸质散落，难以收集整理',
          '多方信息传递存在时差、误差和壁垒',
          '追溯依赖人工记录，效率较低',
        ],
      },
      stakeholders: [
        {
          name: '建设方',
          role: '项目投资',
          main_concerns: ['投资效益', '工程质量', '进度控制'],
          current_challenges: ['信息不透明', '决策滞后', '风险难控'],
          expectations: ['全程可视化', '及时决策支撑', '风险预警'],
        },
        {
          name: '建管部',
          role: '建设管理',
          main_concerns: ['质量把控', '进度管理', '成本控制'],
          current_challenges: ['信息滞后', '协调困难', '追溯不便'],
          expectations: [
            '实时掌握/回溯材料状态',
            '管理责任追溯精准快捷',
            '提高管理效率',
          ],
        },
        {
          name: '监理公司',
          role: '质量监督',
          main_concerns: ['材料质量', '规范执行', '责任追溯'],
          current_challenges: [
            '证书收集处理困难',
            '检查效率低',
            '记录及同步繁琐',
          ],
          expectations: ['快速验证材料', '数字化记录', '便捷追溯查询'],
        },
        {
          name: '施工方',
          role: '工程实施',
          main_concerns: ['材料供应', '现场施工效率', '施工成本/利润控制'],
          current_challenges: ['材料识别耗时', '手工记录易错', '沟通成本高'],
          expectations: ['便捷材料识别', '自动化记录', '高效协同'],
        },
      ],
      meetings: [
        {
          date: '2025年6月5日',
          topic: '配水管网项目部多方会议',
          participants: [
            '建管部工程师',
            '监理总工',
            '施工项目经理',
            '供应商厂家',
            '系统技术人员',
          ],
          key_points: ['明确调研目标', '确定调研范围', '划分各方角色'],
          outcome: '建立四方协作机制，开展实地调研',
        },
        {
          date: '2025年6月11日',
          topic: '建管部需求细节及完整流程讨论会',
          participants: ['建管部工程师', '系统技术人员'],
          key_points: [
            '全流程操作细节确认',
            '梳理材料管理流程',
            '识别关键痛点',
            '讨论改进方向',
          ],
          outcome: '形成流程清单，确定数字化需求',
        },
        {
          date: '2025年6月18日',
          topic: '一管一码技术侧方案及难点确认会',
          participants: ['建管部工程师', '系统技术人员  '],
          key_points: ['方案设计及难点', '明确技术路线', '商定实施计划'],
          outcome: '达成共识，确定平台建设技术路线及难点解决办法',
        },
      ],
    }
  }

  // 现场照片数据（使用占位图片）
  getPhotoGallery() {
    return [
      {
        title: '管网改造现场01',
        category: '现场调研',
        description: '首次管网改造项目现场调研，多方结合现场情况讨论',
        placeholder: xianchang_01,
        tags: ['管网改造', '现场'],
      },
      {
        title: '管网改造现场02',
        category: '现场调研',
        description: '首次管网改造项目现场调研，多方结合现场情况讨论',
        placeholder: xianchang_02,
        tags: ['管网改造', '现场'],
      },
      {
        title: '管材堆放现场',
        category: '质量管控',
        description: '新采购球磨铸铁管材现场堆放情况实拍',
        placeholder: xianchangguanjian_01,
        tags: ['管材', '现场'],
      },
      {
        title: '管材信息标准',
        category: '质量管控',
        description: '结合业务与系统需要，标明管材信息的显示标准要求',
        placeholder: guanjianxinxi_01,
        tags: ['管材信息', '标准'],
      },
      {
        title: '线上会议记录',
        category: '协调沟通',
        description: '建管部与技术侧持续确认技术细节与需求实际',
        placeholder: xianshang_01,
        tags: ['线上会议', '记录'],
      },
    ]
  }

  // 渲染概述视图
  renderOverviewTab() {
    const data = this.getSurveyData()

    return html`
      <!-- 项目基本信息 -->
      <div
        class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 border border-blue-200"
      >
        <div class="text-center mb-6">
          <h3
            class="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center"
          >
            <iconify-icon
              icon="mdi:construction"
              class="text-blue-500 mr-3"
            ></iconify-icon>
            ${data.fieldWork.project}调研
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            以老旧管网改造项目为背景，深入一线了解管材管理现状，与各方充分沟通需求
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:map-marker"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">调研地点</div>
            <div class="font-semibold text-gray-800">
              ${data.fieldWork.location}
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:clock-outline"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">调研周期</div>
            <div class="font-semibold text-gray-800">
              ${data.fieldWork.duration}
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:account-group"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">参与人员</div>
            <div class="font-semibold text-gray-800">
              ${data.fieldWork.personNum}人
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:clipboard-list"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">关键发现</div>
            <div class="font-semibold text-gray-800">
              ${data.fieldWork.findings.length}项
            </div>
          </div>
        </div>
      </div>

      <!-- 调研重点与发现 -->
      <div class="grid lg:grid-cols-2 gap-8 mb-8">
        <!-- 调研重点 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <iconify-icon
              icon="mdi:target"
              class="text-blue-500 mr-2"
            ></iconify-icon>
            调研重点
          </h4>
          <div
            class="text-sm text-gray-700 bg-blue-50 rounded-lg p-4 border border-blue-200"
          >
            ${data.fieldWork.focus}
          </div>
          <div class="mt-4">
            <div class="text-sm font-medium text-gray-700 mb-2">参与人员：</div>
            <div class="flex flex-wrap gap-2">
              ${data.fieldWork.participants.map(
                (participant) => html`
                  <span
                    class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded border"
                    >${participant}</span
                  >
                `
              )}
            </div>
          </div>
        </div>

        <!-- 关键发现 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <iconify-icon
              icon="mdi:lightbulb"
              class="text-orange-500 mr-2"
            ></iconify-icon>
            关键发现
          </h4>
          <div class="space-y-3">
            ${data.fieldWork.findings.map(
              (finding, index) => html`
                <div class="flex items-start">
                  <div
                    class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold"
                  >
                    ${index + 1}
                  </div>
                  <div class="text-sm text-gray-700">${finding}</div>
                </div>
              `
            )}
          </div>
        </div>
      </div>

      <!-- 四方协作图 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">
          四方协作关系图
        </h3>
        <div class="relative w-full" style="height: 400px;">
          <!-- 中心：项目 -->
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white z-10"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:construction"
                class="text-3xl mb-1"
              ></iconify-icon>
              <div class="text-sm font-bold">老旧管网改造</div>
            </div>
          </div>

          <!-- 建设方 - 上方 -->
          <div
            class="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:office-building"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${data.stakeholders[0].name}</div>
            </div>
          </div>

          <!-- 建管部 - 左侧 -->
          <div
            class="absolute top-1/2 left-8 transform -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:domain"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${data.stakeholders[1].name}</div>
            </div>
          </div>

          <!-- 监理公司 - 右侧 -->
          <div
            class="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:shield-check"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${data.stakeholders[2].name}</div>
            </div>
          </div>

          <!-- 施工方 - 下方 -->
          <div
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:hard-hat"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${data.stakeholders[3].name}</div>
            </div>
          </div>

          <!-- 连接线 -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
            <!-- 上方到中心 -->
            <line
              x1="50%"
              y1="18%"
              x2="50%"
              y2="35%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 左侧到中心 -->
            <line
              x1="18%"
              y1="50%"
              x2="35%"
              y2="50%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 右侧到中心 -->
            <line
              x1="82%"
              y1="50%"
              x2="65%"
              y2="50%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 下方到中心 -->
            <line
              x1="50%"
              y1="82%"
              x2="50%"
              y2="65%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
          </svg>
        </div>
      </div>
    `
  }

  // 渲染调研详情
  renderSurveyTab() {
    const data = this.getSurveyData()

    return html`
      <div class="space-y-8">
        <!-- 四方角色详情 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <iconify-icon
              icon="mdi:account-group"
              class="text-blue-500 mr-3"
            ></iconify-icon>
            四方协作角色分析
          </h3>
          <div class="grid lg:grid-cols-4 gap-4">
            ${data.stakeholders.map((stakeholder, index) => {
              const colors = ['purple', 'blue', 'green', 'orange']
              const icons = [
                'mdi:office-building',
                'mdi:domain',
                'mdi:shield-check',
                'mdi:hard-hat',
              ]

              return html`
                <div
                  class="stakeholder-card bg-gradient-to-br from-${colors[
                    index
                  ]}-50 to-${colors[
                    index
                  ]}-100 rounded-xl p-6 border border-${colors[
                    index
                  ]}-200 hover:shadow-lg transition-all duration-300"
                >
                  <div class="text-center mb-6">
                    <div
                      class="w-16 h-16 bg-${colors[
                        index
                      ]}-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <iconify-icon
                        icon="${icons[index]}"
                        class="text-3xl text-white"
                      ></iconify-icon>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">
                      ${stakeholder.name}
                    </h4>
                    <div class="text-sm text-${colors[index]}-600 font-medium">
                      ${stakeholder.role}
                    </div>
                  </div>

                  <div class="space-y-4">
                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        主要关注点：
                      </div>
                      <div class="space-y-1">
                        ${stakeholder.main_concerns.map(
                          (concern) => html`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-${colors[
                                  index
                                ]}-500 rounded-full mr-2"
                              ></div>
                              ${concern}
                            </div>
                          `
                        )}
                      </div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        当前挑战：
                      </div>
                      <div class="space-y-1">
                        ${stakeholder.current_challenges.map(
                          (challenge) => html`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <iconify-icon
                                icon="mdi:alert-circle-outline"
                                class="text-red-400 mr-2 text-xs"
                              ></iconify-icon>
                              ${challenge}
                            </div>
                          `
                        )}
                      </div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        期望效果：
                      </div>
                      <div class="space-y-1">
                        ${stakeholder.expectations.map(
                          (expectation) => html`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <iconify-icon
                                icon="mdi:check-circle-outline"
                                class="text-green-500 mr-2 text-xs"
                              ></iconify-icon>
                              ${expectation}
                            </div>
                          `
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              `
            })}
          </div>
        </div>

        <!-- 会议时间线 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <iconify-icon
              icon="mdi:timeline-text"
              class="text-purple-500 mr-3"
            ></iconify-icon>
            沟通协调时间线
          </h3>
          <div class="relative">
            <!-- 时间线 -->
            <div
              class="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"
            ></div>

            <div class="space-y-8">
              ${data.meetings.map(
                (meeting, index) => html`
                  <div class="relative flex items-start">
                    <!-- 时间点 -->
                    <div
                      class="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"
                    ></div>

                    <!-- 内容 -->
                    <div
                      class="ml-16 bg-purple-50 rounded-xl p-6 border border-purple-200 flex-1"
                    >
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <h4 class="font-bold text-gray-800 text-lg">
                            ${meeting.topic}
                          </h4>
                          <div class="text-sm text-purple-600 font-medium">
                            ${meeting.date}
                          </div>
                        </div>
                        <div
                          class="text-xs bg-purple-500 text-white px-3 py-1 rounded-full"
                        >
                          第${index + 1}次会议
                        </div>
                      </div>

                      <div class="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <div
                            class="text-sm font-medium text-gray-700 mb-2 flex items-center"
                          >
                            <iconify-icon
                              icon="mdi:account-multiple"
                              class="mr-1"
                            ></iconify-icon>
                            参会人员
                          </div>
                          <div class="flex flex-wrap gap-1">
                            ${meeting.participants.map(
                              (participant) => html`
                                <span
                                  class="text-xs bg-white text-purple-700 px-2 py-1 rounded border border-purple-200"
                                  >${participant}</span
                                >
                              `
                            )}
                          </div>
                        </div>

                        <div>
                          <div
                            class="text-sm font-medium text-gray-700 mb-2 flex items-center"
                          >
                            <iconify-icon
                              icon="mdi:bullseye-arrow"
                              class="mr-1"
                            ></iconify-icon>
                            关键要点
                          </div>
                          <div class="space-y-1">
                            ${meeting.key_points.map(
                              (point) => html`
                                <div
                                  class="text-sm text-gray-600 flex items-start"
                                >
                                  <div
                                    class="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"
                                  ></div>
                                  ${point}
                                </div>
                              `
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        class="bg-white rounded-lg p-4 border border-purple-200"
                      >
                        <div
                          class="text-sm font-medium text-purple-800 mb-2 flex items-center"
                        >
                          <iconify-icon
                            icon="mdi:handshake"
                            class="mr-1"
                          ></iconify-icon>
                          会议成果
                        </div>
                        <div class="text-sm text-gray-700">
                          ${meeting.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `
  }

  // 渲染照片画廊
  renderPhotosTab() {
    const photos = this.getPhotoGallery()

    return html`
      <div class="space-y-8">
        <!-- 照片画廊 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            现场调研影像记录
          </h3>

          <!-- 主要照片展示 -->
          <div class="mb-8">
            <div
              class="relative bg-gray-100 rounded-xl overflow-hidden"
              style="height: 400px;"
            >
              <img
                src="${photos[this.selectedPhotoIndex].placeholder}"
                alt="${photos[this.selectedPhotoIndex].title}"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div class="flex items-center gap-2 mb-2">
                  <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                    >${photos[this.selectedPhotoIndex].category}</span
                  >
                  ${photos[this.selectedPhotoIndex].tags.map(
                    (tag) => html`
                      <span
                        class="bg-white/20 text-white text-xs px-2 py-1 rounded"
                        >${tag}</span
                      >
                    `
                  )}
                </div>
                <h4 class="text-xl font-bold mb-2">
                  ${photos[this.selectedPhotoIndex].title}
                </h4>
                <p class="text-sm opacity-90">
                  ${photos[this.selectedPhotoIndex].description}
                </p>
              </div>

              <!-- 导航按钮 -->
              <button
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                @click=${() =>
                  this.selectPhoto(
                    (this.selectedPhotoIndex - 1 + photos.length) %
                      photos.length
                  )}
              >
                <iconify-icon
                  icon="mdi:chevron-left"
                  class="text-xl"
                ></iconify-icon>
              </button>
              <button
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                @click=${() =>
                  this.selectPhoto(
                    (this.selectedPhotoIndex + 1) % photos.length
                  )}
              >
                <iconify-icon
                  icon="mdi:chevron-right"
                  class="text-xl"
                ></iconify-icon>
              </button>
            </div>
          </div>

          <!-- 缩略图 -->
          <div class="grid grid-cols-6 gap-4">
            ${photos.map(
              (photo, index) => html`
                <div
                  class="relative cursor-pointer group overflow-hidden rounded-lg ${index ===
                  this.selectedPhotoIndex
                    ? 'ring-2 ring-blue-500'
                    : ''}"
                  @click=${() => this.selectPhoto(index)}
                >
                  <img
                    src="${photo.placeholder}"
                    alt="${photo.title}"
                    class="w-full aspect-square object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                  ></div>
                  <div class="absolute bottom-1 left-1 right-1">
                    <div
                      class="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded text-center truncate"
                    >
                      ${photo.title}
                    </div>
                  </div>
                </div>
              `
            )}
          </div>
        </div>

        <!-- 照片分类统计 -->
        <div class="grid md:grid-cols-3 gap-6">
          ${[
            {
              category: '现场调研',
              count: 2,
              icon: 'mdi:hard-hat',
              color: 'blue',
            },
            {
              category: '质量管控',
              count: 2,
              icon: 'mdi:package-variant',
              color: 'green',
            },
            {
              category: '协调沟通',
              count: 1,
              icon: 'mdi:account-group',
              color: 'purple',
            },
          ].map(
            (stat) => html`
              <div
                class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div
                  class="w-12 h-12 bg-${stat.color}-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <iconify-icon
                    icon="${stat.icon}"
                    class="text-2xl text-white"
                  ></iconify-icon>
                </div>
                <h4 class="font-bold text-gray-800 mb-1">${stat.category}</h4>
                <div class="text-2xl font-bold text-${stat.color}-500 mb-1">
                  ${stat.count}
                </div>
                <div class="text-sm text-gray-500">张照片</div>
              </div>
            `
          )}
        </div>
      </div>
    `
  }

  // 渲染结果总结
  renderResultsTab() {
    const data = this.getSurveyData()

    return html`
      <div class="space-y-8">
        <!-- 调研数据统计 -->
        <div
          class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
            调研成果总览
          </h3>
          <div class="grid md:grid-cols-4 gap-6">
            ${[
              {
                label: '调研周期',
                value: '3',
                unit: '周',
                icon: 'mdi:calendar',
                color: 'blue',
              },
              {
                label: '参与人员',
                value: '9',
                unit: '人',
                icon: 'mdi:account-group',
                color: 'green',
              },
              {
                label: '会议次数',
                value: '5',
                unit: '次',
                icon: 'mdi:calendar-text',
                color: 'orange',
              },
              {
                label: '照片记录',
                value: '5',
                unit: '张',
                icon: 'mdi:camera',
                color: 'purple',
              },
            ].map(
              (stat) => html`
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-${stat.color}-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <iconify-icon
                      icon="${stat.icon}"
                      class="text-3xl text-white"
                    ></iconify-icon>
                  </div>
                  <div class="text-3xl font-bold text-${stat.color}-600 mb-1">
                    ${stat.value}
                  </div>
                  <div class="text-sm text-gray-600">
                    ${stat.label}（${stat.unit}）
                  </div>
                </div>
              `
            )}
          </div>
        </div>

        <!-- 关键成果 -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- 主要发现 -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <iconify-icon
                icon="mdi:lightbulb"
                class="text-orange-500 mr-2"
              ></iconify-icon>
              主要发现
            </h3>
            <div class="space-y-4">
              ${data.fieldWork.findings.map(
                (finding, index) => html`
                  <div
                    class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400"
                  >
                    <div class="flex items-start">
                      <div
                        class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold"
                      >
                        ${index + 1}
                      </div>
                      <div class="text-sm text-gray-700">${finding}</div>
                    </div>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 共识达成 -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <iconify-icon
                icon="mdi:handshake"
                class="text-green-500 mr-2"
              ></iconify-icon>
              共识达成
            </h3>
            <div class="space-y-4">
              ${data.meetings.map(
                (meeting, index) => html`
                  <div
                    class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
                  >
                    <div class="text-sm font-medium text-green-800 mb-1">
                      ${meeting.date}
                    </div>
                    <div class="text-sm text-gray-700">${meeting.outcome}</div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>

        <!-- 解决方案路径 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">实施路径规划</h3>
          <div class="relative">
            <!-- 路径流程 -->
            <div class="flex items-center justify-between relative">
              ${[
                {
                  phase: '现状调研',
                  status: 'completed',
                  color: 'green',
                  icon: 'mdi:magnify',
                },
                {
                  phase: '需求确认',
                  status: 'completed',
                  color: 'green',
                  icon: 'mdi:clipboard-check',
                },
                {
                  phase: '方案设计',
                  status: 'current',
                  color: 'blue',
                  icon: 'mdi:drawing',
                },
                {
                  phase: '试点建设',
                  status: 'pending',
                  color: 'gray',
                  icon: 'mdi:flask',
                },
                {
                  phase: '推广应用',
                  status: 'pending',
                  color: 'gray',
                  icon: 'mdi:rocket',
                },
              ].map(
                (phase, index) => html`
                  <div class="flex flex-col items-center relative z-10">
                    <div
                      class="w-16 h-16 ${phase.color === 'green' ? 'bg-green-500' : phase.color === 'blue' ? 'bg-blue-500' : 'bg-gray-500'} rounded-full flex items-center justify-center mb-3 ${phase.status === 'current' ? 'ring-8 ring-blue-300 animate-pulse' : ''}"
                    >
                      <iconify-icon
                        icon="${phase.icon}"
                        class="text-2xl text-white"
                      ></iconify-icon>
                    </div>
                    <div class="text-sm font-medium text-gray-800 text-center">
                      ${phase.phase}
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      ${phase.status === 'completed'
                        ? '已完成'
                        : phase.status === 'current'
                        ? '进行中'
                        : '待开始'}
                    </div>
                  </div>
                  ${index < 4
                    ? html`
                        <div
                          class="flex-1 h-1 ${phase.status === 'completed' ? 'bg-green-300' : 'bg-gray-300'} mx-4 relative top-8"
                        ></div>
                      `
                    : ''}
                `
              )}
            </div>
          </div>
        </div>

        <!-- 下步计划 -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
          >
            <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <iconify-icon
                icon="mdi:target"
                class="text-blue-500 mr-2"
              ></iconify-icon>
              近期目标
            </h4>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                完善平台功能设计方案
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                开发核心功能原型
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                选择试点项目进行验证
              </div>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
          >
            <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <iconify-icon
                icon="mdi:flag"
                class="text-green-500 mr-2"
              ></iconify-icon>
              长期愿景
            </h4>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                覆盖集团所有工程项目
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                建立行业数字化标杆
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                提升管理效率和质量
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  selectPhoto(index) {
    this.selectedPhotoIndex = index
    this.requestUpdate()
  }

  switchTab(tab) {
    this.currentTab = tab
    this.requestUpdate()
  }

  initializeAnimations() {
    // 卡片入场动画
    const cards = this.shadowRoot.querySelectorAll(
      '.survey-site-card, .supplier-card, .meeting-card'
    )
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    )

    // 进度条动画
    const progressBars = this.shadowRoot.querySelectorAll(
      '.supplier-card .bg-green-500'
    )
    progressBars.forEach((bar) => {
      const width = bar.style.width
      gsap.fromTo(
        bar,
        { width: '0%' },
        { width: width, duration: 1.5, ease: 'power2.out', delay: 0.5 }
      )
    })
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('currentTab')) {
      this.safeRequestAnimationFrame(() => {
        this.initializeAnimations()
      })
    }
  }

  render() {
    return html`
      <div class="w-full flex flex-col items-center">
        <!-- 标题区域 -->
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            前期工作：深入一线，夯实基础
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            为确保平台方案精准、可行，我们开展了全面深入的调研与沟通，形成了扎实的实施基础。
          </p>
        </div>

        <!-- 标签页导航 -->
        <div
          class="flex gap-2 mb-8 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
        >
          ${[
            { id: 'overview', label: '总体概述', icon: 'mdi:view-dashboard' },
            { id: 'survey', label: '调研详情', icon: 'mdi:clipboard-search' },
            { id: 'photos', label: '现场照片', icon: 'mdi:camera' },
            { id: 'results', label: '成果总结', icon: 'mdi:chart-line' },
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
            : this.currentTab === 'survey'
            ? this.renderSurveyTab()
            : this.currentTab === 'photos'
            ? this.renderPhotosTab()
            : this.renderResultsTab()}
        </div>
      </div>
    `
  }
}

customElements.define('preliminary-work', PreliminaryWorkComponent)
