/*
 * @Author: LeeZB
 * @Date: 2025-06-20 11:15:22
 * @LastEditors: Leezb101 leezb101@126.com
 * @LastEditTime: 2025-06-20 11:16:27
 * @copyright: Copyright © 2025 高新供水.
 */
/*
 * @Author: LeeZB
 * @Date: 2025-06-20 11:15:22
 * @LastEditors: Leezb101 leezb101@126.com
 * @LastEditTime: 2025-06-20 11:15:25
 * @copyright: Copyright © 2025 高新供水.
 */
export function renderRoadmap() {
  const roadmapData = [
    {
      phase: 1,
      duration: '3个月',
      title: '试点验证期',
      description:
        '选取1-2个项目进行试点，验证流程、收集反馈、快速迭代优化系统。',
    },
    {
      phase: 2,
      duration: '6个月',
      title: '规模推广期',
      description:
        '扩大至所有新建重大项目，固化流程，完成核心单位的系统化培训。',
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
      description:
        '进入常态化运营，通过数据分析持续挖掘管理改进点，探索AI等高级应用。',
    },
  ]
  const roadmapContainer = document.getElementById('roadmap-container')
  if (!roadmapContainer) return

  roadmapData.forEach((item, index) => {
    const isLeft = index % 2 === 0
    const itemEl = document.createElement('div')
    itemEl.className = `relative flex items-center ${
      !isLeft ? 'md:justify-end' : ''
    }`
    itemEl.innerHTML = `
      <div class="hidden md:block w-5/12 ${
        !isLeft ? 'md:order-last' : ''
      }"></div>
      <div class="absolute w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold z-10 left-0 md:left-1/2 -ml-4 md:-translate-x-1/2">${
        item.phase
      }</div>
      <div class="w-full md:w-5/12 bg-white rounded-xl p-6 shadow-md ml-10 md:ml-0">
        <p class="font-bold text-blue-600 mb-1">${item.duration}</p>
        <h4 class="font-bold text-lg mb-2">${item.title}</h4>
        <p class="text-gray-600 text-sm">${item.description}</p>
      </div>
    `
    roadmapContainer.appendChild(itemEl)
  })
}
