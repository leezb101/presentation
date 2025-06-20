import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class RoadmapComponent extends BaseComponent {
  constructor() {
    super()
    this.roadmapData = [
      {
        phase: 1,
        duration: '3个月',
        title: '试点验证期',
        description: '选取1-2个项目进行试点，验证流程、收集反馈、快速迭代优化系统。',
      },
      {
        phase: 2,
        duration: '6个月',
        title: '规模推广期',
        description: '扩大至所有新建重大项目，固化流程，完成核心单位的系统化培训。',
      },
      {
        phase: 3,
        duration: '12个月',
        title: '全面覆盖与集成期',
        description: '推广至所有工程项目，并启动与财务/ERP等系统的对接计划。',
      },
      {
        phase: 4,
        duration: '持续进行',
        title: '演进优化期',
        description: '进入常态化运营，通过数据分析持续挖掘管理改进点，探索AI等高级应用。',
      },
    ]
  }

  render() {
    return html`
      <div class="container mx-auto px-6 w-full max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">
            实施路线图：分阶段稳步推进
          </h2>
        </div>
        <div class="relative w-full">
          <div class="border-l-2 border-blue-300 absolute h-full top-0 left-4 md:left-1/2 md:-translate-x-1/2"></div>
          <div class="space-y-12">
            ${this.roadmapData.map((item, index) => this.renderRoadmapItem(item, index))}
          </div>
        </div>
      </div>
    `
  }

  renderRoadmapItem(item, index) {
    const isLeft = index % 2 === 0
    
    return html`
      <div class="relative flex items-center ${!isLeft ? 'md:justify-end' : ''}">
        <div class="hidden md:block w-5/12 ${!isLeft ? 'md:order-last' : ''}"></div>
        <div class="absolute w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold z-10 left-0 md:left-1/2 -ml-4 md:-translate-x-1/2">
          ${item.phase}
        </div>
        <div class="w-full md:w-5/12 bg-white rounded-xl p-6 shadow-md ml-10 md:ml-0">
          <p class="font-bold text-blue-600 mb-1">${item.duration}</p>
          <h4 class="font-bold text-lg mb-2">${item.title}</h4>
          <p class="text-gray-600 text-sm">${item.description}</p>
        </div>
      </div>
    `
  }
}

customElements.define('roadmap-component', RoadmapComponent)